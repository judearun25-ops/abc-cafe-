import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // AI Chatbot API Endpoint
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, history = [] } = req.body;
      
      if (!process.env.GEMINI_API_KEY) {
        return res.status(500).json({ error: "Gemini API Key is missing. Please configure it in the Secrets panel." });
      }

      const ai = new GoogleGenAI({ 
        apiKey: process.env.GEMINI_API_KEY,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          }
        }
      });

      const chat = ai.chats.create({
        model: "gemini-3.5-flash",
        config: {
          systemInstruction: `You are the AI Cafe Assistant for "ABC Cafe". 
          ABC Cafe is a premium, modern cafe. Tone: Elegant, welcoming, helpful, and concise. 
          Respond to questions about our menu, recommend drinks, take mock reservations, and explain opening hours (Mon-Sat 7am-7pm, Sun 8am-5pm). 
          Keep answers brief and formatted cleanly.`,
        },
      });

      // Send the entire history to maintain context
      for (const turn of history) {
         await chat.sendMessage({ message: turn.user });
         // We don't need to capture the response here since it's just establishing context, 
         // but ideally history should be passed as a proper multi-turn structure if the API supports it.
         // For simplicity, we just send a single message with history context.
      }
      
      const prompt = history.length > 0 ? `Previous context:\n${history.map((h: any) => `User: ${h.user}\nAssistant: ${h.bot}`).join('\n')}\n\nCurrent User message: ${message}` : message;

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: prompt,
        config: {
          systemInstruction: `You are the AI Cafe Assistant for "ABC Cafe". 
          ABC Cafe is a premium, modern cafe. Tone: Elegant, welcoming, helpful, and concise. 
          Respond to questions about our menu, recommend drinks, take mock reservations, and explain opening hours (Mon-Sat 7am-7pm, Sun 8am-5pm). 
          Keep answers brief and formatted cleanly.`
        }
      });

      res.json({ reply: response.text });
    } catch (error: any) {
      console.error("Gemini API Error:", error);
      res.status(500).json({ error: "Failed to process chat message." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*all', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();

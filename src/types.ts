export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'coffee' | 'espresso' | 'pastry' | 'breakfast' | 'dessert' | 'beverage';
  image?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}

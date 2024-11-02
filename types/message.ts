export type MessageProps = {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  imageUrl?: string;
  imageAnalysis?: string;
}

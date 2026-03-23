export type MessageProps = {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  imageUrl?: string;
  imageAnalysis?: string;
};

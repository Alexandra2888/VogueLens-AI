import { MessageProps } from './message';

export type ConversationProps = {
  id: number;
  title: string;
  messages: MessageProps[];
}
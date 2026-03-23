import { MessageProps } from './message';

export type ConversationProps = {
  id: string;
  title: string;
  messages: MessageProps[];
};

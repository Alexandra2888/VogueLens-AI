import Header from '../_components/nav/header';
import ChatbotInterface from './_components/chatbot-interface';
export default function ChatPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <ChatbotInterface />
      </main>
    </>
  );
}

import Header from '../../_components/nav/header';

const ChatLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default ChatLayout;

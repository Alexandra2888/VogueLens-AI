import dynamic from 'next/dynamic';

const Footer = dynamic(() => import('app/_components/footer'));
const Header = dynamic(() => import('app/_components/nav/header'));

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <div className="flex-1 pt-16">{children}</div>
      <Footer />
    </main>
  );
};

export default HomeLayout;

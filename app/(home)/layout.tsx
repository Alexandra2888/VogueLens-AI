import Footer from 'app/_components/footer';
import Header from 'app/_components/nav/header';

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

import Header from 'app/_components/nav/header';
import CrispProvider from 'app/providers/crisp-provider';
import Footer from 'app/_components/footer';

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <div className="flex-1 pt-16">{children}</div>
      <Footer />
      <CrispProvider />
    </main>
  );
};

export default HomeLayout;

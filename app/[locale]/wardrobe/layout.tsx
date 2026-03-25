import Header from '../../_components/nav/header';
import Footer from '../../_components/footer';

const WardrobeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-4rem)]">{children}</main>
      <Footer />
    </>
  );
};

export default WardrobeLayout;

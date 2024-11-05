import Header from '../_components/nav/header';
import Footer from '../_components/footer';

const PrivacyLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default PrivacyLayout;

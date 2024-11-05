import Header from '../_components/nav/header';
import Footer from '../_components/footer';

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default ProfileLayout;

import Footer from "../Footer/Footer";
import HeaderNav from "../Header/HeaderNav";

const MainLayout = ({ children }) => {
  return (
    <>
      <HeaderNav />
      <main className="">{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;

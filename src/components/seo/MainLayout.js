import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header/>
      <main className="">{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;

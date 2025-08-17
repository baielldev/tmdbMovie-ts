import scss from "./LayoutSite.module.scss";
import { Outlet } from "react-router";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import ScrollTop from "../ui/scrollTop/ScrollTop";

const LayoutSite = () => {
  return (
    <div className={scss.layoutSite}>
      <ScrollTop />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default LayoutSite;

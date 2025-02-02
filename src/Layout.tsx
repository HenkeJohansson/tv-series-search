import { Outlet } from "react-router-dom";
import Styles from "./styles/Layout.module.scss";
// import Navbar from "./components/Navbar";

const Layout = () => (
  <div className={Styles.wrapper}>
    {/* <Navbar /> */}
    <Outlet />
  </div>
);

export default Layout;

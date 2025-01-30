import { Outlet } from "react-router-dom";
// import Navbar from "./components/Navbar";

const Layout = () => (
  <div>
    {/* <Navbar /> */}
    <Outlet />
  </div>
);

export default Layout;

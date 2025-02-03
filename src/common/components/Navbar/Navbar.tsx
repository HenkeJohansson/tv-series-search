import tvmLogo from "../../../assets/images/tvm-header-logo.png"
import Search from "../Search/Search";
import Styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={Styles.navbar}>
      <img src={tvmLogo} alt="TVM logo" />
      <Search />
    </div>
  )
}

export default Navbar

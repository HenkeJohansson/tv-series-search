import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Styles from "./BreadCrumbs.module.scss";
import { Link } from "react-router-dom";

type TBreadCrumbs = {
  backLink: string;
};

const BreadCrumbs = ({ backLink }: TBreadCrumbs) => {
  return (
    <Link to={backLink}>
      <div className={Styles.breadCrumbsContainer}>
        <FontAwesomeIcon icon={faArrowLeft} />
        <p>Back to search results</p>
      </div>
    </Link>
  );
};

export default BreadCrumbs;

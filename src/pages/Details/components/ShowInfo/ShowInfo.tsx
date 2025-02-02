import { TShowDetails } from "../../../../types";
import Rating from "../Rating/Rating";
import Styles from "./ShowInfo.module.scss";

type TShowInfo = {
  showDetails: TShowDetails
};

const renderGenres = (genres: string[]) => genres.length > 0 ? genres.join(' | ') : '';

const ShowInfo = ({ showDetails }: TShowInfo) => (
  <div className={Styles.showInfoContainer}>
    <h1>{showDetails.name}</h1>
    <Rating rating={showDetails.rating.average} />
    <p>Genres: {renderGenres(showDetails.genres)}</p>
    <div dangerouslySetInnerHTML={{ __html: showDetails.summary }} />
  </div>
);

export default ShowInfo;

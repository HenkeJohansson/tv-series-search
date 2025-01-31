import { TShowDetails } from "../../../../types";
import Styles from "./ShowInfo.module.scss";

type TShowInfo = {
  showDetails: TShowDetails
};

const renderGenres = (genres: string[]) => genres.length > 0 ? genres.join(' | ') : '';

const ShowInfo = ({ showDetails }: TShowInfo) => (
  <div className={Styles.showInfoContainer}>
    <h2>{showDetails.name}</h2>
    <span>{`${showDetails.rating}`}</span>
    <p>Genres: {renderGenres(showDetails.genres)}</p>
    <div dangerouslySetInnerHTML={{ __html: showDetails.summary }} />
  </div>
);

export default ShowInfo;

import { Rating } from "../../../../common/components";
import fallbackPoster from "../../../../assets/images/fallback_poster.jpg";
import { useNavigate } from "react-router-dom";
import { TShow } from "../../../../common/types";
import Styles from "./SerieCard.module.scss";

type TSerieCard = {
  showInfo: TShow;
};

const SerieCard = ({ showInfo }: TSerieCard) => {
  const navigate = useNavigate();

  return (
    <div
      className={Styles.serieCard}
      onClick={() => navigate(`/details/${showInfo.id}`)}
    >
      <img src={showInfo.image?.medium || fallbackPoster} />
      <h3>{showInfo.name}</h3>
      <Rating rating={showInfo.rating.average} />
    </div>
  );
};

export default SerieCard;

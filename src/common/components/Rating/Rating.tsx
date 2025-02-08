import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";

type TRating = {
  rating: number;
};

const Rating = ({ rating }: TRating) => {
  const stars = [];

  for (let i = 1; i <= 10; i++) {
    if (i <= Math.floor(rating)) {
      stars.push(<FontAwesomeIcon key={i} icon={faStar} style={{ color: "yellow" }} />);
    } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
      stars.push(<FontAwesomeIcon key={i} icon={faStarHalfStroke} style={{ color: "yellow" }} />);
    } else {
      stars.push(<FontAwesomeIcon key={i} icon={faStar} style={{ color: "black" }} />);
    }
  }

  return <div>{stars}</div>;
};

export default Rating;

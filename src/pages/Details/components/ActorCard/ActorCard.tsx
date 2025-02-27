import Styles from "./ActorCard.module.scss";

type TCastCard = {
  actorInfo: {
    character: {
      name: string;
    };
    person: {
      name: string;
      image: {
        medium: string;
      };
    };
  };
};

const ActorCard = ({ actorInfo }: TCastCard) => {
  return (
    <li className={Styles.actorCard}>
      <img src={actorInfo.person.image.medium} alt={actorInfo.person.name} />
      <div className={Styles.actorInfo}>
        <h4 className={Styles.realName}>{actorInfo.person.name}</h4>
        <h5 className={Styles.characterName}>{`as ${actorInfo.character.name}`}</h5>
      </div>
    </li>
  );
};

export default ActorCard;

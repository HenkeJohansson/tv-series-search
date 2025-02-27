import Styles from "./Cast.module.scss";
import ActorCard from "../ActorCard/ActorCard";

type TCast = {
  castData: {
    character: {
      name: string;
    };
    person: {
      name: string;
      image: {
        medium: string;
      };
    };
  }[];
};

const Cast = ({ castData }: TCast) => {
  return (
    <>
      <h2 className={Styles.heading}>Cast</h2>
      <ul className={Styles.cast}>
        {castData.length === 0 && <p>No cast information available.</p>}
        {castData.map((actor: any, idx: number) => (
          <ActorCard key={`${actor.person.id}_${idx}`} actorInfo={actor} />
        ))}
      </ul>
    </>
  );
};

export default Cast;

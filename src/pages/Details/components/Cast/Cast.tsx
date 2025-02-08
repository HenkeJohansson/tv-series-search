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
      <div className={Styles.cast}>
        {castData.length === 0 && <p>No cast information available.</p>}
        {castData.map((actor: any) => (
          <ActorCard key={actor.person.id} actorInfo={actor} />
        ))}
      </div>
    </>
  );
};

export default Cast;

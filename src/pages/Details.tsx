import { useNavigate, useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  // <button onClick={() => navigate("/details/{id}")}>Details</button>
  return (
    <div>
      <h1>Details: {id}</h1>
    </div>
  );
}

export default Details

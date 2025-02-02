import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { BreadCrumbs } from "../../components";
import ShowInfo from "./components/ShowInfo/ShowInfo";
import Styles from "./Details.module.scss";

const fetchDetailsById = async (id: string) => {
  const { data } = await axios.get(`https://api.tvmaze.com/shows/${id}`);
  return data;
};

const Details = () => {
  const { id } = useParams<{ id: string }>();
  const { data, error, isLoading } = useQuery({
    queryKey: ['details', id],
    queryFn: () => (id ? fetchDetailsById(id) : Promise.reject('id not provided')),
    enabled: !!id,
    staleTime: (1000 * 60 * 5),
  });

  useEffect(() => {
    console.log('Details - useEffect', { data });
  }, [data]);

  const navigate = useNavigate();
  // <button onClick={() => navigate("/details/{id}")}>Details</button>
  return (
    <div>
      <BreadCrumbs backLink="/" />
      <h1>Details: {id}</h1>
      {data && (
        <div className={Styles.showDetails}>
          <img src={data.image.medium} alt={`${data.name} poster`} />
          <ShowInfo showDetails={data} />
        </div>
      )}
    </div>
  );
}

export default Details

import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useQueries } from "@tanstack/react-query";
import { useEffect } from "react";
import { BreadCrumbs } from "../../components";
import ShowInfo from "./components/ShowInfo/ShowInfo";
import Styles from "./Details.module.scss";
import Cast from "./components/Cast/Cast";

const fetchDetailsById = async (id: string) => {
  const { data } = await axios.get(`https://api.tvmaze.com/shows/${id}`);
  return data;
};

const fetchCastById = async (id: string) => {
  const { data } = await axios.get(`https://api.tvmaze.com/shows/${id}/cast`);
  return data;
};

const Details = () => {
  const { id } = useParams<{ id: string }>();
  const results = useQueries({
    queries: [
      {
        queryKey: ['details', id],
        queryFn: () => (id ? fetchDetailsById(id) : Promise.reject('id not provided')),
        enabled: !!id,
        staleTime: 1000 * 60 * 5,
      },
      {
        queryKey: ['cast', id],
        queryFn: () => (id ? fetchCastById(id) : Promise.reject('id not provided')),
        enabled: !!id,
        staleTime: 1000 * 60 * 5,
      }
    ],
  });
  const detailsData = results[0].data ?? null;
  const castData = results[1].data ?? [];

  useEffect(() => {
    console.log('Details - useEffect', { detailsData }, { castData });
  }, [detailsData, castData]);

  const navigate = useNavigate();
  // <button onClick={() => navigate("/details/{id}")}>Details</button>
  return (
    <div>
      <BreadCrumbs backLink="/" />
      {detailsData && (
        <div className={Styles.showDetails}>
          <img src={detailsData.image.medium} alt={`${detailsData.name} poster`} />
          <ShowInfo showDetails={detailsData} />
        </div>
      )}
      <Cast castData={castData} />
    </div>
  );
}

export default Details;

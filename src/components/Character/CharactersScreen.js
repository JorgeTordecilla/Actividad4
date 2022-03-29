import React from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

import "animate.css";
import { useFetch } from "../../hooks/useFetch";
export const CharactersScreen = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, loading } = useFetch(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  if (!loading && !data) return <Navigate to="/" />;

  const handleReturn = () => {
    navigate(-1);
  };
  return (
    <div className="row mt-5 container-fluid">
      {loading ? (
        <p>Cargando</p>
      ) : (
        <>
          <div className="col-lg-4 ">
            <img
              className=" animate__animated animate__bounceInLeft"
              src={data.image}
              alt={data.name}
            />
          </div>
          <div className="col-lg-8">
            <h3>{data.name}</h3>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <b>Status</b> {data.status}
              </li>
              <li className="list-group-item">
                <b>Species</b> {data.species}
              </li>
              <li className="list-group-item">
                <b>Gender:</b> {data.gender}
              </li>
              <li className="list-group-item">
                <b>Origin:</b> {data.origin?.name}
              </li>
              <li className="list-group-item">
                <b>Location:</b> {data.location?.name}
              </li>
              <li className="list-group-item">
                <b>Created:</b> {new Date(data.created).toDateString()}
              </li>
            </ul>
            <br />
            <button className="btn btn-outline-info" onClick={handleReturn}>
              Regresar
            </button>
          </div>
        </>
      )}
    </div>
  );
};

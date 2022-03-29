import React from "react";
import { Link } from "react-router-dom";

export const CharactersCard = ({ id, name, status, species, image }) => {
  return (
    <div className="col d-flex justify-content-center">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-lg-6 d-flex justify-content-center">
            <img src={image} className="img-fluid" alt={name} />
          </div>
          <div className="col-lg-6">
            <div className="card-body">
              <h5 className="card-title"> {name}</h5>
              <p className="card-text">Status: {status}</p>
              <p className="text-muted">species: {species}</p>

              <Link to={`/personajes/${id}`}>Mas...</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

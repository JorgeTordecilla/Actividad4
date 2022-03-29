import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import { types } from "../../types/types";

export const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch({ type: types.logout });
    navigate("/login", { replace: true });
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Rick&Morty
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  "nav-item nav-link " + (isActive ? "active" : "")
                }
                to="/personajes"
              >
                Personajes
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  "nav-item nav-link " + (isActive ? "active" : "")
                }
                to="/busqueda"
              >
                Busqueda
              </NavLink>
            </li>
          </ul>
          <span className="navbar-text">
            <div className="collapse navbar-collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
              <ul className="navbar-nav ml-auto">
                <span className="nav-item nav-link text-info">{user.name}</span>
                <button
                  className="nav-item nav-link btn"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </ul>
            </div>
          </span>
        </div>
      </div>
    </nav>
  );
};

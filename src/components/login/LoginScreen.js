import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import { useForm } from "../../hooks/useForm";
import { types } from "../../types/types";
export const LoginScreen = () => {
  const [{ userName }, handleInputChange] = useForm({
    userName: "",
  });
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);
  const lastPath = localStorage.getItem("lastPath") || "/";
  const handleLogin = () => {
    if (userName.length < 2) {
      return alert("Nombre debe estar");
    }
    dispatch({ type: types.login, payload: { name: userName } });
    navigate(lastPath, { replace: true });
  };
  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />
      <form onSubmit={handleLogin}>
        <input
          autoComplete="off"
          className="form-control"
          name="userName"
          placeholder="Nombre"
          style={{ width: "200px" }}
          type="text"
          value={userName}
          onChange={handleInputChange}
        />

        <button
          className="btn btn-primary mt-2 w-10"
          type="submit"
          onClick={handleLogin}
        >
          Login
        </button>
      </form>
    </div>
  );
};

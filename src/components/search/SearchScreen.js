import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { CharactersCard } from "../Character/CharactersCard";
import queryString from "query-string";
import { useFetch } from "../../hooks/useFetch";

export const SearchScreen = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const { q = "" } = queryString.parse(search);
  const [{ searchText }, handleInputChange] = useForm({
    searchText: q,
  });

  const url = `https://rickandmortyapi.com/api/character/?name=${q}`;
  let { data, loading } = useFetch(url);
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate({ path: "", search: `?q=${searchText}` });
  };

  return (
    <>
      <h1>Busquedas</h1>
      <hr />
      <h3>Buscar</h3>
      <div className="row">
        <div className="col-lg-4">
          <form onSubmit={handleSubmit}>
            <input
              autoComplete="off"
              className="form-control"
              type="text"
              placeholder="Search"
              name="searchText"
              value={searchText}
              onChange={handleInputChange}
            />
            <button
              className="btn btn-outline-primary mt-1 w-100"
              type="submit"
            >
              Buscar
            </button>
          </form>
        </div>
        <div className="col-lg-8 ps-5">
          <h4 className="text-info">Resultados</h4>
          {q === "" ? (
            <p className="alert alert-info">Busca un Personaje por su nombre</p>
          ) : (
            !loading &&
            data.length <= 0 && (
              <p className="alert alert-danger"> Personaje no encontrado</p>
            )
          )}
          {}
          {!loading && !data ? (
            <p className="alert alert-info">Cargando</p>
          ) : (
            data?.results?.map((character) => (
              <CharactersCard key={character.id} {...character} />
            ))
          )}
        </div>
      </div>
    </>
  );
};

import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { CharacterList } from "../Character/CharacterList";
export const MainScreen = () => {
  const { data } = useFetch("https://rickandmortyapi.com/api/character");
  const characters = data?.results || [];
  return (
    <div>
      <h1>Lista de los Personajes Principales</h1>
      <hr />
      <CharacterList characters={characters} />
    </div>
  );
};

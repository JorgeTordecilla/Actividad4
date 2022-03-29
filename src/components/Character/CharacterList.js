import { CharactersCard } from "./CharactersCard";

export const CharacterList = ({ characters }) => {
  return (
    <div className="row row-cols-1 p-3 row-cols-md-3 g-3 d-sm-flex  justify-content-center">
      {characters.map((characters) => (
        <CharactersCard key={characters.id} {...characters} />
      ))}
    </div>
  );
};

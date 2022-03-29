import { Routes, Route } from "react-router-dom";
import { CharactersScreen } from "../components/Character/CharactersScreen";
import { MainScreen } from "../components/main/MainScreen";
import { SearchScreen } from "../components/search/SearchScreen";
import { Navbar } from "../components/ui/Navbar";

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="personajes" element={<MainScreen />} />
          <Route path="busqueda" element={<SearchScreen />} />
          <Route path="/personajes/:id" element={<CharactersScreen />} />
          <Route path="/" element={<MainScreen />} />
        </Routes>
      </div>
    </>
  );
};

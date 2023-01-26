import './assets/css/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Routes, Route } from "react-router-dom";
import Pokedex from "./pages/Pokedex";
import Home from "./pages/Home";
import ProtectedRoutes from "./pages/ProtectedRoutes";
import PokemonDetail from "./pages/PokemonDetail";
import PokemonConfig from './pages/PokemonConfig';

function App() {
  return (
    <HashRouter>
      <div className="App">

        <Routes>
          <Route path="/" element={<Home />} />

          <Route element={<ProtectedRoutes />}>
            <Route path="/pokedex" element={<Pokedex />} />
            <Route path="/pokedex/:id" element={<PokemonDetail />} />
            <Route path="/config" element={<PokemonConfig />} />

          </Route>
        </Routes>
      </div>
    </HashRouter>
  )
}

export default App
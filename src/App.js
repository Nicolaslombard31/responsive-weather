import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ClassPage from "./pages/ClassPage";
import RacePage from "./pages/RacePage";

export default function App() {
  return (
    <Router>
      <nav className="bg-black text-center flex flex-col md:flex-row gap-4 p-4">
        <Link
          to="/"
          className="bg-gray-100 p-4 rounded-lg text-3xl font-semibold hover:bg-gray-200 transition"
        >
          Accueil
        </Link>
        <Link
          to="/race"
          className="bg-gray-100 p-4 rounded-lg text-3xl font-semibold hover:bg-gray-200 transition"
        >
          Créer un Personnage
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/class" element={<ClassPage />} /> 
        <Route path="/race" element={<RacePage />} />
      </Routes>
    </Router>
  );
}

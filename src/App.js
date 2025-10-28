import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TailwindPage from "./pages/TailwindPage";

export default function App() {
  return (
    <Router>
      <nav className="p-4 bg-gray-100 flex justify-center space-x-8 shadow-md">
        <Link to="/" className="text-gray-800 hover:text-blue-500 font-semibold">
          Acceuil
        </Link>
        <Link to="/tailwind" className="text-gray-800 hover:text-blue-500 font-semibold">
          Création Personnage
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tailwind" element={<TailwindPage />} />
      </Routes>
    </Router>
  );
}

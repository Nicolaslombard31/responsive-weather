import { Link } from "react-router-dom";
import useRaceListAPI from "../services/useRaceListAPI";

export default function RacesPage() {
  const raceList = useRaceListAPI();

  if (!raceList) {
    return <p className="text-center mt-10">Chargement...</p>;
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8">Races</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {raceList.map((race, index) => (
          <Link
            key={index}
            to="/class"
            className="block bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition"
          >
            <h2 className="text-2xl font-semibold mb-2">{race.name}</h2>

            {race.details ? (
              <div className="text-sm text-gray-700 space-y-1">
                <p><strong>Speed:</strong> {race.details.speed}</p>
                <p><strong>Age:</strong> {race.details.age}</p>
                <p><strong>Language:</strong> {race.details.language_desc}</p>
              </div>
            ) : (
              <p className="text-gray-500">Chargement des détails...</p>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}

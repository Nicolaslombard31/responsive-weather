import { Link } from "react-router-dom";
import useClassListAPI from "../services/useClassListAPI"; // ton hook que nous avons créé

export default function ClassesPage() {
  const classList = useClassListAPI();

  if (!classList) {
    return <p className="text-center mt-10">Chargement...</p>;
  }

  return (
    <div className="p-6 bg-gray-100 flex flex-row flex-wrap justify-center gap-4 min-h-screen">
      {classList.map((classe, index) => (
        <div key={index} className="shadow-md rounded-xl p-6 w-64 bg-white">
          <h2 className="text-xg font-semibold">{classe.name}</h2>
          {classe.details ? (
            <div className="mt-2 text-sm text-gray-700">
              <p><strong>Hit Die:</strong> {classe.details.hit_die}</p>
              <p><strong>Professions:</strong> {classe.details.proficiencies.map(p => p.name).join(", ")}</p>
              <p><strong>Saving Throws:</strong> {classe.details.saving_throws.map(s => s.name).join(", ")}</p>
              {/* tu peux ajouter d'autres détails ici */}
            </div>
          ) : (
            <p>Chargement des détails...</p>
          )}
        </div>
      ))}
    </div>
  );
}

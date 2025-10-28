import usePlayer from "../services/usePlayer";

export default function TailwindPage() {
  const player = usePlayer();

  if (!player) return <p className="text-center mt-10">Chargement...</p>;

  return (
    <div
      className="w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('https://www.dndbeyond.com/content/1-1-96-0/skins/waterdeep/images/Waterdeep_opengraph.png')",
      }}
    >
      {/* Contenu par-dessus le fond */}
      <div className="flex items-center justify-center h-full">
        <h1 className="text-white text-4xl font-bold bg-black/50 p-4 rounded">
          Bienvenue dans D&D
        </h1>
      </div>
    </div>
  );
}

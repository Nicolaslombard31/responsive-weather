import usePlayer from "../services/usePlayer";

export default function TailwindPage() {
  const player = usePlayer();

  if (!player) return <p className="text-center mt-10">Chargement...</p>;

  return (
    <div className="p-6 bg-gray-100 flex flex-row flex-wrap justify-center gap-4">
      {player.map((p, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-xl p-6 text-center w-64"
        >
          <p className="text-2xl font-semibold">{p.name}</p>
        </div>
      ))}
    </div>
  );
}

import { useEffect, useState } from "react";

export default function usePlayer() {
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    fetch("http://www.dnd5eapi.co/api/2014/classes")
      .then(res => res.json())
      .then(data => setPlayer(data.results))
      .catch(console.error);
  }, []);

  return player;
}
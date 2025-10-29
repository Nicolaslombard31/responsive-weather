import { useEffect, useState } from "react";

async function getRaceDetailsAPI(raceList) {
  if (!raceList) return [];

  // Récupérer les détails pour chaque classe
  const detailedRaces = await Promise.all(
    raceList.map(async (raceItem) => {
      try {
        const res = await fetch(`https://www.dnd5eapi.co/api/2014/races/${raceItem.index}`);
        const data = await res.json();
        return { ...raceItem, details: data }; // enrichir avec les détails
      } catch (error) {
        console.error(error);
        return raceItem; // si erreur, on garde juste l'objet initial
      }
    })
  );

  console.log(detailedRaces);
  return detailedRaces;
}

export default function useRaceListAPI() {
  const [RaceList, setRaceList] = useState(null);

  useEffect(() => {
    async function fetchRaces() {
      try {
        const res = await fetch("https://www.dnd5eapi.co/api/2014/races");
        const data = await res.json();
        const detailedList = await getRaceDetailsAPI(data.results);
        setRaceList(detailedList);
      } catch (error) {
        console.error(error);
      }
    }

    fetchRaces();
  }, []);

  return RaceList;
}

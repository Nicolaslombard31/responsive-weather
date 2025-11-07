import { useEffect, useState } from "react";

async function getClassDetailsAPI(classList) {
  if (!classList) return [];

  // Récupérer les détails pour chaque classe
  const detailedClasses = await Promise.all(
    classList.map(async (classItem) => {
      try {
        const res = await fetch(`https://www.dnd5eapi.co/api/2014/classes/${classItem.index}`);
        const data = await res.json();
        return { ...classItem, details: data }; // enrichir avec les détails
      } catch (error) {
        console.error(error);
        return classItem; // si erreur, on garde juste l'objet initial
      }
    })
  );

  console.log(detailedClasses);
  return detailedClasses;
}

export default function useClassListAPI() {
  const [classList, setClassList] = useState(null);

  useEffect(() => {
    async function fetchClasses() {
      try {
        const res = await fetch("https://www.dnd5eapi.co/api/2014/classes");
        const data = await res.json();
        const detailedList = await getClassDetailsAPI(data.results);
        setClassList(detailedList);
      } catch (error) {
        console.error(error);
      }
    }

    fetchClasses();
  }, []);

  return classList;
}

import { useEffect, useState } from "react";
import Horse from "./Horse";

const HorseToys = () => {
  const [horses, setHorses] = useState([]);
  useEffect(() => {
    fetch("https://animal-toys-2.vercel.app/allToys/Horse")
      .then((res) => res.json())
      .then((data) => {
        setHorses(data);
      });
  }, []);
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-2 py-2 mx-4 sm:pl-1 md:pl-10">
      {horses.map((horse) => (
        <Horse key={horse._id} horse={horse}></Horse>
      ))}
    </div>
  );
};

export default HorseToys;

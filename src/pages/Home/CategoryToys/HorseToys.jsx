import { useEffect, useState } from "react";
import Horse from "./Horse";

const HorseToys = () => {
  const [horses, setHorses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/allToys/Horse")
      .then((res) => res.json())
      .then((data) => {
        setHorses(data);
      });
  }, []);
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 py-2 mx-4 sm:pl-1 ">
      {horses.map((horse) => (
        <Horse key={horse._id} horse={horse}></Horse>
      ))}
    </div>
  );
};

export default HorseToys;

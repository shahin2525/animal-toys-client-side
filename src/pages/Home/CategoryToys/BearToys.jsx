import { useEffect, useState } from "react";
import Bear from "./Bear";

const BearToys = () => {
  const [bears, setBears] = useState([]);
  useEffect(() => {
    fetch("https://animal-toys-2.vercel.app/allToys/Bear")
      .then((res) => res.json())
      .then((data) => {
        setBears(data);
      });
  }, []);
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-2 py-2 mx-4 sm:pl-1 md:pl-10">
      {bears.map((bear) => (
        <Bear key={bear._id} bear={bear}></Bear>
      ))}
    </div>
  );
};

export default BearToys;

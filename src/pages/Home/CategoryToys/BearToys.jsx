import { useEffect, useState } from "react";
import Bear from "./Bear";

const BearToys = () => {
  const [bears, setBears] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/allToys/Bear")
      .then((res) => res.json())
      .then((data) => {
        setBears(data);
      });
  }, []);
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 py-2 mx-4 sm:pl-1 ">
      {bears.map((bear) => (
        <Bear key={bear._id} bear={bear}></Bear>
      ))}
    </div>
  );
};

export default BearToys;

import { useEffect, useState } from "react";
import Dog from "./Dog";

const DogToys = () => {
  const [dogs, setDogs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/allToys/Dogs")
      .then((res) => res.json())
      .then((data) => {
        setDogs(data);
      });
  }, []);
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 py-2 mx-4 sm:pl-1 ">
      {dogs.map((dog) => (
        <Dog key={dog._id} dog={dog}></Dog>
      ))}
    </div>
  );
};

export default DogToys;

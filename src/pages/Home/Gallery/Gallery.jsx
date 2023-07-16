import { useEffect, useState } from "react";
import GalleryCard from "../GalleryCard/GalleryCard";

const Gallery = () => {
  const [cards, setCard] = useState([]);

  useEffect(() => {
    fetch("gallery.json")
      .then((res) => res.json())
      .then((data) => setCard(data));
  }, []);
  return (
    <div className="bg-rose-200 py-4">
      <div className="text-center font-extrabold text-3xl">
        <h1 className="my-6">Toys Gallery</h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 md:pr-4">
          {cards.map((card) => (
            <GalleryCard key={card.id} card={card}></GalleryCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;

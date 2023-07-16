import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const GalleryCard = ({ card }) => {
  // console.log(card);
  const { name, price, rating, image_url } = card;
  return (
    <div>
      <div className="card sm:w-80 mx-2  md:w-96 h-[480px] bg-base-100 shadow-xl ">
        <figure className="px-10 pt-10">
          <img src={image_url} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p className="font-bold text-xl">Price:${price}</p>{" "}
          <Rating
            style={{ maxWidth: 180 }}
            value={Math.round(rating || 0)}
            // value={5}
            readOnly
          />
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;

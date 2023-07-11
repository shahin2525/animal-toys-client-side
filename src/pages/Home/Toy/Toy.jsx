import "@smastrom/react-rating/style.css";
import { Rating } from "@smastrom/react-rating";
const Toy = ({ toy }) => {
  console.log(toy);
  const { imageUrl, toyName, Price, rating } = toy;
  return (
    <div className="card w-72 bg-base-100 shadow-xl">
      <figure>
        <img src={imageUrl} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{toyName}</h2>
        <p>{Price}</p>
        <Rating
          style={{ maxWidth: 180 }}
          value={Math.round(rating || 0)}
          readOnly
        />
        <div className="card-actions justify-end">
          <button className="btn btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default Toy;

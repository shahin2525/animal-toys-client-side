import "@smastrom/react-rating/style.css";
import { Rating } from "@smastrom/react-rating";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { toast } from "react-toastify";
const Horse = ({ horse }) => {
  //   console.log(horse);
  const { user } = useContext(AuthContext);

  const notify = () => {
    if (!user) {
      toast.error("You should log in first ", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }
  };

  const { imageUrl, toyName, Price, rating } = horse;
  return (
    <div className="card w-[340px] bg-base-100 shadow-xl">
      <figure>
        <img src={imageUrl} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="text-xl font-semibold ">Toy-Name : {toyName}</h2>
        <p className="font-semibold">Toy-Price : {Price}</p>
        <Rating
          style={{ maxWidth: 180 }}
          value={Math.round(rating || 0)}
          readOnly
        />
        <div className="card-actions justify-end">
          <button onClick={notify} className="btn btn-primary">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Horse;

import "@smastrom/react-rating/style.css";
import { Rating } from "@smastrom/react-rating";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Bear = ({ bear }) => {
  //   console.log(bear);
  const { user } = useContext(AuthContext);

  const notify = () => {
    if (!user) return;
    toast.error("You should log in first ", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const { imageUrl, toyName, Price, rating } = bear;
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
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Bear;

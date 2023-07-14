import { useLoaderData } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
const ViewDetail = () => {
  const singleData = useLoaderData();
  console.log(singleData);
  return (
    <div className="bg-rose-100 py-5 px-10">
      <div className="card card-side bg-base-100 shadow-xl">
        <div className="rounded-lg">
          {" "}
          <figure>
            <img
              // height={"700"}
              // width={"700"}
              className="h-72"
              src={singleData?.imageUrl}
              alt="Movie"
            />
          </figure>
        </div>
        <div className="card-body ">
          <h2 className="card-title">Toy-Name: {singleData?.toyName}</h2>
          <p>Seller-Name: {singleData?.sellerName}</p>
          <p>Seller-Email: {singleData?.email}</p>
          <p>Price: {singleData?.Price}</p>
          <p>Quantity: {singleData?.Quantity}</p>
          <p>Description: {singleData?.Description}</p>

          <Rating
            style={{ maxWidth: 180 }}
            value={Math.round(singleData?.rating || 0)}
            // value={5}
            readOnly
          />

          {/* <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ViewDetail;

import { useEffect, useState } from "react";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  console.log(toys);
  useEffect(() => {
    fetch("http://localhost:3000/allToys")
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, []);
  return (
    <div className="overflow-x-auto bg-rose-100 font-semibold py-5 px-2">
      <div className=" flex justify-center items-center my-4">
        <input
          className="mr-3 rounded px-2 py-1"
          type="text"
          placeholder="Search"
        />
        <button className="bg-orange-400 px-2 py-1 rounded ">Search</button>
      </div>
      <table className="table table-xs">
        <thead>
          <tr>
            <th>#</th>

            <th>Toy-Name</th>
            <th>Seller-Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Quantity</th>

            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {toys.map((toy, index) => (
            <tr key={index}>
              <th>{index + 1}</th>

              <td>{toy?.toyName}</td>
              <td>{toy?.sellerName}</td>
              <td>{toy?.category}</td>
              <td>{toy?.Price}</td>
              <td>{toy?.Quantity}</td>

              <td>
                <button>View Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllToys;

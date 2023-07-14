import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  console.log(toys);
  useEffect(() => {
    fetch(`http://localhost:3000/myToys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, [user]);

  const handleDelete = (id) => {
    // console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/toy/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "milk has been deleted.", "success");
              const remaining = toys.filter((toy) => toy._id !== id);
              setToys(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="overflow-x-auto bg-rose-100 font-semibold py-5 px-2">
      <table className="table table-xs">
        <thead>
          <tr>
            <th>#</th>
            <th>Toy-image</th>
            <th>Toy-Name</th>
            <th>Seller-Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Description</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {toys.map((toy, index) => (
            <tr key={index}>
              <th>{index + 1}</th>
              <td>
                {" "}
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img
                      src={toy?.imageUrl}
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
              </td>
              <td>{toy?.toyName}</td>
              <td>{toy?.sellerName}</td>
              <td>{toy?.category}</td>
              <td>{toy?.Price}</td>
              <td>{toy?.Quantity}</td>
              <td>{toy?.Description}</td>
              <td>
                <Link to={`/update/${toy?._id}`}>
                  <button>Update</button>
                </Link>
              </td>
              <td>
                <button onClick={() => handleDelete(toy?._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyToys;

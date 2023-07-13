import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  //   console.log(toys);
  useEffect(() => {
    fetch(`http://localhost:3000/myToys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, [user]);
  return (
    <div className="overflow-x-auto">
      <table className="table table-xs">
        <thead>
          <tr>
            <th>#</th>
            <th>Toy-image</th>
            <th>Toy-Name</th>
            <th>Seller-Name</th>
            <th>Sub-Category</th>
            <th>Price</th>
            <th>Available-Quantity</th>
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
              <td>{toy.toyName}</td>
              <td>Quality Control Specialist</td>
              <td>Littel, Schaden and Vandervort</td>
              <td>Canada</td>
              <td>12/16/2020</td>
              <td>Blue</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    // <div className="overflow-x-auto">
    //   <table className="table">
    //     {/* head */}
    //     <thead>
    //       <tr>
    //         <th>#</th>
    //         <th>Toy-image</th>
    //         <th>Toy-Name</th>
    //         <th>Seller-Name</th>
    //         <th>Sub-Category</th>
    //         <th>Price</th>
    //         <th>Available-Quantity</th>
    //         <th>Description</th>
    //         <th>Update</th>
    //         <th>Delete</th>
    //       </tr>
    //     </thead>
    //     <tbody>

    //    { toys.map((toy,index) => (<tr>
    //         <th>
    //           <label>
    //             <input type="checkbox" className="checkbox" />
    //           </label>
    //         </th>
    //         <td>
    //           <div className="flex items-center space-x-3">
    //             <div className="avatar">
    //               <div className="mask mask-squircle w-12 h-12">
    //                 <img
    //                   src="/tailwind-css-component-profile-2@56w.png"
    //                   alt="Avatar Tailwind CSS Component"
    //                 />
    //               </div>
    //             </div>
    //             <div>
    //               <div className="font-bold">Hart Hagerty</div>
    //               <div className="text-sm opacity-50">United States</div>
    //             </div>
    //           </div>
    //         </td>
    //         <td>
    //           Zemlak, Daniel and Leannon
    //           <br />
    //           <span className="badge badge-ghost badge-sm">
    //             Desktop Support Technician
    //           </span>
    //         </td>
    //         <td>Purple</td>
    //         <th>
    //           <button className="btn btn-ghost btn-xs">details</button>
    //         </th>
    //       </tr>)   }
    //     </tbody>
    //   </table>
    // </div>
  );
};

export default MyToys;

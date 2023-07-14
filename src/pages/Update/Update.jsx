// import { useLoaderData } from "react-router-dom";
// import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
// import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const Update = () => {
  const updateData = useLoaderData();
  console.log(updateData);
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch(`http://localhost:3000/toy/${updateData._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            title: "success!",
            text: "Toy successfully updated",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
    console.log(data);
  };

  return (
    <div className="sm:h-full md:h-52 bg-rose-100 py-10 w-full mx-auto">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid sm:grid-cols-1 md:grid-cols-3"
      >
        <input
          className="m-5 h-8 rounded"
          {...register("Price", { required: true })}
          placeholder="Price"
          type="text"
        />

        <input
          className="m-5 h-8 rounded"
          {...register("Quantity", { required: true })}
          placeholder="Quantity"
          type="text"
        />
        <input
          className="m-5 h-8 rounded"
          {...register("Description", { required: true })}
          placeholder="Description"
          type="text"
        />

        {errors.exampleRequired && <span>This field is required</span>}

        {/* <div className="flex h-10 w-64 mx-auto  ">
        </div> */}
        <input
          className="mt-5 sm:ml-10 sm:pl-10 md:ml-[350px] btn btn-primary w-64"
          type="submit"
          value="Update"
        />
      </form>
    </div>
  );
};

export default Update;

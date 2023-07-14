import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
const AddAToy = () => {
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("https://animal-toys-2.vercel.app/addToy", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "success!",
            text: "Toy successfully added",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
    console.log(data);
  };
  return (
    <div className="sm:h-full md:h-96 bg-rose-100 py-10 w-full mx-auto">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid sm:grid-cols-1 md:grid-cols-3"
      >
        <input
          className="m-5 h-8 rounded"
          {...register("toyName", { required: true })}
          placeholder="Toy-Name"
          type="text"
        />

        <input
          className="m-5 h-8 rounded"
          {...register("imageUrl", { required: true })}
          placeholder="Toy-Image-Url"
          type="url"
        />

        <input
          className="m-5 h-8 rounded"
          value={user?.name}
          {...register("sellerName", { required: true })}
          placeholder="Seller-Name"
          type="text"
        />
        <input
          className="m-5 h-8 rounded"
          value={user?.email}
          {...register("email", { required: true })}
          placeholder="Your email"
          type="email"
        />
        <select className="h-8 m-5 rounded" {...register("category")}>
          <option value="Horse">Horse</option>
          <option value="Bear">Bear</option>
          <option value="Dogs">Dogs</option>
        </select>
        <input
          className="m-5 h-8 rounded"
          {...register("Price", { required: true })}
          placeholder="Price"
          type="text"
        />
        <input
          className="m-5 h-8 rounded"
          {...register("rating", { required: true })}
          placeholder="Rating"
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
          className="mt-5 md:ml-[350px] btn btn-primary w-64"
          type="submit"
          value="Add-Toy"
        />
      </form>
    </div>
  );
};

export default AddAToy;

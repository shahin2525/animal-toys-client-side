import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../provider/AuthProvider";
const AddAToy = () => {
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="sm:h-full md:h-96 bg-rose-100 py-10 w-full mx-auto">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid sm:grid-cols-1 md:grid-cols-3"
      >
        <input
          className="m-5 h-8 rounded"
          {...register("Toy-Name", { required: true })}
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
          {...register("Seller-Name", { required: true })}
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
          {...register("Rating", { required: true })}
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

        <input className="m-5 btn btn-primary " type="submit" />
      </form>
    </div>
  );
};

export default AddAToy;

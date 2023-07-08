import { Link } from "react-router-dom";
// import img from "../../assets/images/login/login.png";
// import img from "../../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
// import SocialLogin from "../Shared/SocialLogin/SocialLogin";
// import SocialLoginButton from "../Shared/SocialLogin/SocialLoginButton";

//

import { useState } from "react";
import SocialLoginButton from "../Shared/SocialLogin/SocialLoginButton";

const Signup = () => {
  const [error, setError] = useState("");
  const { createUser } = useContext(AuthContext);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const photo = form.photo.value;
    console.log(email, password, name, photo);
    if (!/^.{6,}$/.test(password)) {
      setError("password length will be minimum 6 character");
      return;
    }
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        const message = error.message;
        console.log(message);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200 pb-4">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Sign up Now!</h1>
        </div>
        <p>{error}</p>
        <form
          onSubmit={handleRegister}
          className="card  w-96 shadow-2xl bg-base-100"
        >
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                required
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                name="email"
                required
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                name="password"
                required
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo-Url</span>
              </label>
              <input
                type="text"
                placeholder="photo-url"
                name="photo"
                required
                className="input input-bordered"
              />
              <SocialLoginButton></SocialLoginButton>
              <p className="mt-5">
                Already have an account?
                <Link className="ml-1" to="/Login">
                  Login
                </Link>
              </p>
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign up</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;

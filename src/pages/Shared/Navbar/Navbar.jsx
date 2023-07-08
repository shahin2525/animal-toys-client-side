import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
// import logo from "../../../assets/logo.png";
import { AuthContext } from "../../../provider/AuthProvider";

const Navbar = () => {
  const { logOut, user } = useContext(AuthContext);
  // userProfileUpdate,
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => {
        const message = error.message;
        console.log(message);
      });
  };

  // userProfileUpdate({
  //   displayName: "Jane Q. User",
  //   photoURL: "https://example.com/jane-q-user/profile.jpg",
  // })
  //   .then(() => {
  //     // Profile updated!
  //     // ...
  //   })
  //   .catch((error) => {
  //     const message = error.message;
  //     console.log(message);
  //   });

  return (
    <div className="navbar bg-rose-100 flex-col md:flex-row bold">
      <div className="">
        <a className="btn btn-ghost normal-case text-xl">
          <img
            height={"100"}
            width={"100"}
            // src="https://i.ibb.co/d4YLVsk/Logo-Makr-9-Wm9-Cv.png"
            src="https://i.ibb.co/pxbZhhW/toyLogo.png"
          />
        </a>
      </div>
      <div className=" flex-col md:flex-row mx-auto my-0">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-orange-500 btn btn-ghost normal-case text-xl"
              : "btn btn-ghost normal-case text-xl"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            isActive
              ? "text-orange-500 btn btn-ghost normal-case text-xl"
              : "btn btn-ghost normal-case text-xl"
          }
        >
          Blog
        </NavLink>
        {user ? (
          <button className="text-xl font-semibold" onClick={handleLogOut}>
            logOut
          </button>
        ) : (
          <button className="text-xl font-semibold">
            <Link to="/login">login</Link>
          </button>
        )}
      </div>

      <div className="flex-start gap-2">
        {/* {user &&    <button>logOut</button>} */}

        <div className="">
          {user && (
            <div
              className=" tooltip tooltip-left w-10"
              data-tip={user?.displayName}
            >
              <img
                className=" group-hover:opacity-75 rounded-full"
                src={user?.photoURL}
                alt=""
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

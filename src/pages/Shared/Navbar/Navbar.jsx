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

  return (
    <div className="navbar bg-rose-50 flex-col md:flex-row bold">
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
              ? "text-orange-400 btn btn-ghost normal-case text-lg"
              : "btn btn-ghost normal-case text-lg"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            isActive
              ? "text-orange-400 btn btn-ghost normal-case text-lg"
              : "btn btn-ghost normal-case text-lg"
          }
        >
          Blog
        </NavLink>
        <NavLink
          to="/all-toy"
          className={({ isActive }) =>
            isActive
              ? "text-orange-400 btn btn-ghost normal-case text-lg"
              : "btn btn-ghost normal-case text-lg"
          }
        >
          All-Toy
        </NavLink>
        {user ? (
          <>
            <NavLink
              to="/my-toys"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-400 btn btn-ghost normal-case text-lg"
                  : "btn btn-ghost normal-case text-lg"
              }
            >
              My-Toys
            </NavLink>
            <NavLink
              to="/add-toy"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-400 btn btn-ghost normal-case text-lg"
                  : "btn btn-ghost normal-case text-lg"
              }
            >
              Add-A-Toy
            </NavLink>
            {/* <span>{user?.displayName}</span> */}
            <button className="text-xl font-semibold" onClick={handleLogOut}>
              logOut
            </button>
          </>
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
              className=" tooltip tooltip-left btn btn-ghost btn-circle avatar"
              data-tip={user?.displayName}
            >
              <img
                className=" w-10   rounded-full "
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

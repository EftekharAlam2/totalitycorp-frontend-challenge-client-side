import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Context } from "../AuthProviders/Providers";

const Navbar = () => {
  const { user, logOut } = useContext(Context);

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => ` ${isActive ? "bg-red-500" : ""}`}
              >
                Home
              </NavLink>
            </li>
            {user && (
              <li>
                <NavLink
                  to="/cart"
                  className={({ isActive }) =>
                    ` ${isActive ? "bg-red-500" : ""}`
                  }
                >
                  My Shopping Cart
                </NavLink>
              </li>
            )}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl text-green-500 font-bold">
          Uniqueness
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => ` ${isActive ? "bg-red-500" : ""}`}
            >
              Home
            </NavLink>
          </li>
          {user && (
            <li>
              <NavLink
                to="/cart"
                className={({ isActive }) => ` ${isActive ? "bg-red-500" : ""}`}
              >
                My Shopping Cart
              </NavLink>
            </li>
          )}
        </ul>
      </div>

      <div className="navbar-end">
        <div className="pr-4 relative ">
          {user && (
            <div className="flex md:gap-3 items-center">
              <img
                className=" w-12 rounded-full"
                src={user.photoURL}
                alt="Image"
              />
              <p>{user.displayName}</p>
            </div>
          )}
        </div>
        {user ? (
          <div>
            <button className="btn btn-success text-white" onClick={logOut}>
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login">
            <button className="btn btn-success text-white">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;

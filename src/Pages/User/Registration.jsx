import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { Context } from "../../AuthProviders/Providers";

const Registration = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const { createUser, updateUser } = useContext(Context);

  const handleRegistration = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const name = event.target.name.value;
    const photo = event.target.photo.value;

    const confirmPassword = event.target.confirmPassword.value;
    if (password !== confirmPassword) {
      Swal.fire({
        title: "Passwords do not match",
        text: "Please make sure the passwords match",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    if (password.length < 6) {
      Swal.fire({
        title: "Please add at least 6 characters in the password!",
        text: "Do you want to continue?",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    const capitalLetter = /(?=.*[A-Z])/;
    if (!capitalLetter.test(password)) {
      Swal.fire({
        title: "Password should contain at least one capital letter",
        text: "Do you want to continue?",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    const specialCharacter = /(?=.*[!@#$&*])/;
    if (!specialCharacter.test(password)) {
      Swal.fire({
        title: "Password should contain at least one special character",
        text: "Do you want to continue?",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    createUser(email, password)
      .then((result) => {
        const registerUser = result.user;
        updateUser(registerUser, name, photo)
          .then(() => {})
          .catch((error) => {
            console.log(error.message);
          });
        Swal.fire({
          icon: "success",
          title: "Registration Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });
        event.target.reset();
      })
      .catch(() => {});
  };

  return (
    <div className="max-w-md mx-auto my-4 p-6 bg-white rounded-md shadow-md">
      <Helmet>
        <title>Uniqueness | SignUp</title>
      </Helmet>
      <form className="max-w-sm mx-auto" onSubmit={handleRegistration}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full border-gray-300 rounded-md shadow-xl focus:border-blue-500 focus:ring-blue-500 px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full border-gray-300 rounded-md shadow-xl focus:border-blue-500 focus:ring-blue-500 px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 font-bold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full border-gray-300 rounded-md shadow-xl focus:border-blue-500 focus:ring-blue-500 px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="confirmPassword"
            className="block text-gray-700 font-bold mb-2"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            className="w-full border-gray-300 rounded-md shadow-xl focus:border-blue-500 focus:ring-blue-500 px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="photoURL"
            className="block text-gray-700 font-bold mb-2"
          >
            Photo URL
          </label>
          <input
            type="text"
            id="photoURL"
            name="photo"
            className="w-full border-gray-300 rounded-md shadow-xl focus:border-blue-500 focus:ring-blue-500 px-3 py-2"
            required
          />
        </div>
        <div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Register
          </button>
        </div>
        <div className="mt-4 text-center">
          Already have an account?{" "}
          <p className="text-blue-500 hover:text-red-700 link">
            <Link to="/login">Go to the login page</Link>
          </p>{" "}
          .
        </div>
      </form>
    </div>
  );
};

export default Registration;

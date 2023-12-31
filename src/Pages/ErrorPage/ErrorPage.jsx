import { Link, useRouteError } from "react-router-dom";
import errorpic from "/error.png";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div id="error-page" className="text-center text-4xl my-52">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className="mb-4">
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to="/">
        <button className="btn btn-success text-white">
          Going to Home Page
        </button>
      </Link>
      <div className=" flex justify-center">
        <div className="w-1/2 md:w-1/5 mt-10 md:mt-20">
          <img src={errorpic} alt="" />
        </div>
      </div>
    </div>
  );
}

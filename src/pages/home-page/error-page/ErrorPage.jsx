import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <div>
      <h1>The Path you Searched is not avaible</h1>
      <Link to="/">
        <button>Go Back Home Page</button>
      </Link>
    </div>
  );
};

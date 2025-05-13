import { useSelector } from "react-redux";
import "./auth.css";
export const Auth = () => {
  const auth = useSelector((state) => state.Authreducer);
  return (
    <div className="auth-container">
      <button
        className="navbar-right__btn3"
        onClick={() => dispatch(setUserAuth(true))}
      >
        {auth.result && auth.userAuth ? (
          auth.result.name ? (
            <span>{auth.result.name.charAt(0).toUpperCase()}</span>
          ) : (
            <span>{auth.result.email.charAt(0).toUpperCase()}</span>
          )
        ) : (
          <FaRegUserCircle className="icon" />
        )}
      </button>

      <div className="auth-container-2">
        <h1>{auth.result.name}</h1>
        <button className="btn" onClick={() => dispatch(setUserAuth(true))}>Login to another Account</button>
      </div>
    </div>
  ); 
};

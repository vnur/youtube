import { IoMdNotificationsOutline } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import "./navbar-right.css";
import { Auth } from "./Auth/Auth";
import { useDispatch, useSelector } from "react-redux";
import { setUserAuth } from "../../../../features/authSlice";

export const NavbarRight = () => {
  const auth = useSelector((state) => state.Authreducer);
  const dispatch = useDispatch();

  return (
    <li className="navbar-right grid grid-three-cols">
      <button className="navbar-right__btn1">
        <span>+</span> Create
      </button>

      <button className="navbar-right__btn2">
        <IoMdNotificationsOutline className="icon" />
      </button>

      <button
        className="navbar-right__btn3"
        onClick={() => dispatch(setUserAuth(!auth.userAuth))}
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

      {auth.userAuth && <Auth />}
    </li>
  );
};

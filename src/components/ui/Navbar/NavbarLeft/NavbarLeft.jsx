import { IoMenuOutline } from "react-icons/io5";
import "./navbar-left.css";
import { useSidebarToggleContext } from "../../../../context/SidebarToggleContext";

export const NavbarLeft = () => {
  const {setToggleSideBarFun}= useSidebarToggleContext()
  

  return (
    <li className="navbar-left">
      <IoMenuOutline onClick={setToggleSideBarFun} />

      <div className="navbar-left__youtubetxtimg">
        <img className="navbar-left__youtubeimg" width="20px" src="youtube.png" alt="" />

        <div className="navbar-left__youtubetxt">
          YouTube <sup>IN</sup>
        </div>
      </div>
    </li>
  );
};

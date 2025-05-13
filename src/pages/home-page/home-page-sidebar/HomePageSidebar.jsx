import { FaHome } from "react-icons/fa";
import "./home-page-sidebar.css";
import { SiYoutubeshorts } from "react-icons/si";
import { MdHistory, MdSubscriptions } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

export const HomePageSidebar = () => {
  const homepage_block_list = {
    list1: ["Home", "shorts", "subscription", "you", "History"],
    list1symbol: [
      "FaHome",
      "SiYoutubeshorts",
      "MdSubscriptions",
      "CgProfile",
      "MdHistory",
    ],
  };

  const icons = {
    FaHome: <FaHome />,
    SiYoutubeshorts: <SiYoutubeshorts />,
    MdSubscriptions: <MdSubscriptions />,
    CgProfile: <CgProfile />,
    MdHistory: <MdHistory />,
  };
  return (
    <div className="home-page-sidebar__block">  
      {homepage_block_list.list1.map((ele, index) => {
        const iconmap = homepage_block_list.list1symbol[index];
        return (
          <div key={index} className="home-page-sidebar__inneritem">
            <div>{icons[iconmap]}</div>
            <h1 className="home-page-sidebar--title">{ele}</h1>
          </div>
        );
      })}
    </div>
  );
};

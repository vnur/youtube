import {  FaChevronRight, FaFire, FaGraduationCap, FaHome, } from "react-icons/fa";
import "./sidebar.css";
import { SiYoutubegaming, SiYoutubeshorts } from "react-icons/si";
import { MdHistory, MdMovieCreation, MdOutlineNewspaper, MdOutlineOndemandVideo, MdOutlinePlaylistPlay, MdOutlinePodcasts, MdOutlineWatchLater, MdSubscriptions } from "react-icons/md";
import { BiLike } from "react-icons/bi";
import { TbHanger2 } from "react-icons/tb";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { IoMdMusicalNotes } from "react-icons/io";
import { IoRadio } from "react-icons/io5";
import { NavbarLeft } from "../../../ui/Navbar/NavbarLeft/NavbarLeft";
import { useSidebarToggleContext } from "../../../../context/SidebarToggleContext";

export const SideBar = () => {

const {toggleSideBar,setToggleSideBarFun}= useSidebarToggleContext()

  const first_block_list = {
    list1: ["Home", "shorts", "subscription"],
    list1symbol: ["FaHome", "SiYoutubeshorts", "MdSubscriptions"],
  };
  const second_block_list = {
    list1: ["History", "Playlists", "Your videos", "Watch later", "Liked videos"],
    list1symbol: ["MdHistory", "MdOutlinePlaylistPlay", "MdOutlineOndemandVideo","MdOutlineWatchLater","BiLike"],
  };

  const third_block_list = {
    list1: ["Trending", "Shopping", "Music", "Movies", "Live","Gamimg","News", "Sports","Courses","Fashion &Beauty", "Podcasts"],
    list1symbol: ["FaFire", "RiShoppingBag4Fill", "IoMdMusicalNotes","MdMovieCreation","IoRadio","SiYoutubegaming","MdOutlineNewspaper","FaGraduationCap","TbHanger2","MdOutlinePodcasts"],
  };

  const icons = {
    FaHome: <FaHome/>,
    SiYoutubeshorts: <SiYoutubeshorts/>,
    MdSubscriptions: <MdSubscriptions/>,

    MdHistory:<MdHistory/>,
    MdOutlinePlaylistPlay:<MdOutlinePlaylistPlay />,
    MdOutlineOndemandVideo:<MdOutlineOndemandVideo/>,
    MdOutlineWatchLater:<MdOutlineWatchLater/>,
    BiLike:<BiLike/>,

    FaFire:<FaFire/>,
    RiShoppingBag4Fill:<RiShoppingBag4Fill/>,
    IoMdMusicalNotes:<IoMdMusicalNotes/>,
    MdMovieCreation:<MdMovieCreation/>,
    IoRadio:<IoRadio/>,
    SiYoutubegaming:<SiYoutubegaming/>,
    MdOutlineNewspaper:<MdOutlineNewspaper/>,
    FaGraduationCap:<FaGraduationCap/>,
    TbHanger2:<TbHanger2/>,
    MdOutlinePodcasts:<MdOutlinePodcasts/>
  };

  return (
    toggleSideBar && (
      <div className="sidebar__container">
        <div className="sidebar__youtubelogo">
          <NavbarLeft setToggleSideBarFun={setToggleSideBarFun} />
        </div>

        <div className="sidebar__firstblock">
          {first_block_list.list1.map((ele,index)=>{
            const iconmap = first_block_list.list1symbol[index]
            return(
              <div key={index} className="sidebar--innerblock">
              <div>{icons[iconmap]}</div>
              <h1 className="sidebar--title">{ele}</h1>
            </div>
            )
          })}
        </div>
        <hr />

        <div className="sidebar__secondblock">
          <div className="sidebar_secondblock__you">You <FaChevronRight/></div>
          {second_block_list.list1.map((ele,index)=>{
            const iconmap = second_block_list.list1symbol[index]
            return(
              <div key={index} className="sidebar--innerblock">
              <div>{icons[iconmap]}</div>
              <h1 className="sidebar--title">{ele}</h1>
            </div>
            )
          })}
        </div>

        <hr />

        <div className="sidebar__thirdblock">
          <div className="sidebar_you">Explorer </div>
          {third_block_list.list1.map((ele,index)=>{
            const iconmap = third_block_list.list1symbol[index]
            return(
              <div key={index} className="sidebar--innerblock">
              <div>{icons[iconmap]}</div>
              <h1 className="sidebar--title">{ele}</h1>
            </div>
            )
          })}
        </div>

      </div>
    )
  );
};

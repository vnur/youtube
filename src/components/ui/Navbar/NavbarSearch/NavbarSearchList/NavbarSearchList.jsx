import { CiSearch } from "react-icons/ci";
import "./navbar-search-list.css";
import { useEffect, useState } from "react";
// import { youtubeFetchData } from "../../../../../api/YoutubeApi";
import { useInputSearch } from "../../../../../context/InputSearchContext";

export const NavbarSearchList = () => {
  const { searchQuery } = useInputSearch();
  const [debouncing, setDebouncing] = useState("");
  const [Ydata, setYdata] = useState([]);

  const YoutubeListData = async () => {
    const res = await youtubeFetchData({
      queryKey: ["youtube-video", debouncing],
    });
    setYdata(res.YouTubeData);
  };

  //debouncing logic
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncing(searchQuery);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  //api call on the debouncing query
  useEffect(() => {
    const fetchListData = () => {
      try {
        YoutubeListData();
      } catch (error) {
        console.log("error getting list data", error);
      }
    };
    if (debouncing) {
      fetchListData();
    }
  }, [debouncing]);

  console.log(Ydata);
  console.log(debouncing);

  return (
    <div className="navbar-search-list__container">
      {Ydata.map((item, index) => {
        const { title } = item;
        return (
          <div className="navbar-search-list__block" key={index}>
            <CiSearch />

            <p style={{ color: "white" }}>{`${title.slice(0, 20)}...`}</p>
          </div>
        );
      })}
    </div>
  );
};

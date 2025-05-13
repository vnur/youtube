import { CiSearch } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa";
import "./navbar-search.css";
import { NavbarSearchList } from "./NavbarSearchList/NavbarSearchList";
import { useInputSearch } from "../../../../context/InputSearchContext";

export const NavbarSearch = () => {
  const { searchQuery, setSearchQuery, searchList, setSearchList } =
    useInputSearch();

  return (
    <>
      <li className="navbar-search">
        <div className="navbar-search__searchpage">
          <div className="navbar-search__inputsearchblock">
            <input
              className="navbar-search__input"
              type="text"
              placeholder="Search"
              onClick={() => setSearchList(true)}
              onChange={(e) => setSearchQuery(e.target.value)}
              value={searchQuery}
            />
            <button className="navbar-search__searchButtons">
              <CiSearch />
            </button>

            {searchQuery && searchList && (
              <NavbarSearchList  />
            )}
          </div>

          <button className="navbar-search__micButton">
            <FaMicrophone />
          </button>
        </div>
      </li>
    </>
  );
};

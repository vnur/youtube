
import "./navbar.css";
import { NavbarSearch } from "./NavbarSearch/NavbarSearch";
import { NavbarLeft } from "./NavbarLeft/NavbarLeft";
import { NavbarRight } from "./NavbarRight/NavbarRight";

export const Navbar = () => {


  return (
    <nav>
      <ul>
        <NavbarLeft />

        <NavbarSearch />

        <NavbarRight />
      </ul>
    </nav>
  );
};

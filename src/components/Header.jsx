// import data from "../data.json";
import "../styles/header.css";
import { CiMenuBurger } from "react-icons/ci";

const Header = ({ conferenceName }) => {
  return (
    <header
      className="w-full flex justify-between items-center py-2 mb-3"
      id="top"
    >
      <div className="brand py-3">{conferenceName}</div>
      <nav>
        <button className="hamburger-section p-2 md:hidden">
          <CiMenuBurger className="cursor-pointer" />
        </button>

        <ul className="nav-list hidden md:flex items-center gap-6">
          <li className="cursor-pointer active:translate-0.5 transition nav-item home">
            HOME
          </li>
          <li className="cursor-pointer active:translate-0.5 transition nav-item schedule">
            SCHEDULE
          </li>
          <li className="cursor-pointer active:translate-0.5 transition nav-item speakers">
            SPEAKERS
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

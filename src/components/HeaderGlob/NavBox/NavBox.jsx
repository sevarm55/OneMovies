import { NavLink } from "react-router-dom";
import "./NavBox.css";
const NavBox = () => {
    return (
        <nav className="navBox">
            <NavLink to="/">home</NavLink>
            <NavLink to="moviesPage">movies</NavLink>
            <NavLink to="tvSeriesPage">tv Series</NavLink>
            <NavLink to="search">search</NavLink>
        </nav>
    );
};

export default NavBox;

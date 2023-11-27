import { IoHomeOutline } from "react-icons/io5";
import { CgPlayButtonR } from "react-icons/cg";
import { LuMonitorPlay } from "react-icons/lu";
import { HiSearch } from "react-icons/hi";

import { NavLink } from "react-router-dom";
import LogoBox from "../LogoBox/LogoBox";

import "./BurgerNav.css";

const BurgerNav = ({ isBurgerActive }) => {
    return (
        <div className={isBurgerActive ? "burgerNav" : "burgerNavActive"}>
            <div className="menuLogoBox">
                <LogoBox />
            </div>
            <div className="menuTitle">
                <h2>Menu</h2>
            </div>
            <div className="menuInfo">
                <nav className="navLink">
                    <NavLink to="/" className="navLinkItem">
                        <div className="iconWrapper">
                            <IoHomeOutline />
                        </div>
                        <span>home</span>
                    </NavLink>
                    <NavLink to="moviesPage" className="navLinkItem">
                        <div className="iconWrapper">
                            <CgPlayButtonR />
                        </div>
                        <span>movies</span>
                    </NavLink>
                    <NavLink to="tvSeriesPage" className="navLinkItem">
                        <div className="iconWrapper">
                            <LuMonitorPlay />
                        </div>
                        <span>tv Series</span>
                    </NavLink>
                    <NavLink to="search" className="navLinkItem">
                        <div className="iconWrapper">
                            <HiSearch />
                        </div>
                        <span>search</span>
                    </NavLink>
                </nav>
            </div>
        </div>
    );
};

export default BurgerNav;

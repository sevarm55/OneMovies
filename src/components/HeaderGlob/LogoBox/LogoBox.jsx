import { Link } from "react-router-dom";
import s from "./Logobox.module.css";
const LogoBox = () => {
    return (
        <div className={s.logoBox}>
            <Link to="/">
                <h1>
                    One<span>Movies</span>
                </h1>
            </Link>
        </div>
    );
};

export default LogoBox;

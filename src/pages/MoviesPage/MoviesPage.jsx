import { useEffect, useState } from "react";
import LoadMore from "../../components/LoadMore/LoadMore";
import MoviesCard from "../../components/MoviesCard/MoviesCard";
import Slider from "../../components/Slider/Slider";
import s from "./MoviesPage.module.css";
import { useLocation } from "react-router";
const MoviesPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const { pathname } = useLocation();

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 900);
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    if (isLoading) {
        return (
            <div className={s.isLoading}>
                <h1>
                    One<span>Movies</span>
                </h1>
                <div className={s.ldsEllipsis}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        );
    }

    return (
        <div className={s.moviesPage}>
            <Slider isHomePage={false} />
            <MoviesCard />
            <LoadMore />
        </div>
    );
};

export default MoviesPage;

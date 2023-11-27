import { useEffect, useState } from "react";
import LoadMore from "../../components/LoadMore/LoadMore";
import SliderTv from "../../components/SliderTv/SliderTv";
import TvSeriesCard from "../../components/TvSeriesCard/TvSeriesCard";
import s from "./TvSeriesPage.module.css";
import { useLocation } from "react-router";
const TvSeriesPage = () => {
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
        <div className={s.tvSeriesPage}>
            <SliderTv />
            <TvSeriesCard />
            <LoadMore />
        </div>
    );
};

export default TvSeriesPage;

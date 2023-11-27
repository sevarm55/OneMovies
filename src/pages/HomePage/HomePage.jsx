import { useLocation } from "react-router";
import Slider from "../../components/Slider/Slider";
import s from "./HomePage.module.css";
import { useEffect, useState } from "react";

const HomePage = () => {
    
    const [isLoading, setIsLoading] = useState(true);
    const { pathname } = useLocation();
    
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 900);
    },[])

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);


    if(isLoading) {
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
        )
    }

    return (
        <div className={s.homePage}>
            <Slider isHomePage={true} />
        </div>
    );
};

export default HomePage;

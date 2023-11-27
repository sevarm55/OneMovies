import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RiArrowLeftDoubleLine, RiArrowRightDoubleFill } from "react-icons/ri";

import { backdropPath } from "../../api/apiConfig";
import imdIcon from "../../util/svg/image3.svg";

import s from "./Slider.module.css";
import { Link } from "react-router-dom";
import { selectMovies } from "../../store/slices/movies/moviesSlices";
import { actionFetchMovies } from "../../store/slices/movies/action";

const Slider = () => {
    const movies = useSelector(selectMovies);
    const [currentIndex, setCurrentIndex] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actionFetchMovies());
    }, [dispatch]);

    const nextHandler = () => {
        if (currentIndex === movies.length - 1) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const prevHandler = () => {
        if (currentIndex !== 0) setCurrentIndex(currentIndex - 1);
    };

    return (
        <div className={s.sliderContainer}>
            {movies.map((popular) => {
                return (
                    <div
                        key={popular.id}
                        className={s.slider}
                        style={{
                            backgroundImage: `url(${backdropPath(
                                popular.backdrop_path || popular.poster_path
                            )})`,
                            transform: `translateX(-${currentIndex * 100}%)`,
                        }}
                    >
                        <div className={s.shadow}>
                            <div className={s.content}>
                                <h1>{popular.title || popular.name}</h1>
                                <div className={s.rating}>
                                    <img src={imdIcon} alt="" />
                                    <p>{popular.vote_average}</p>
                                </div>
                                <p>{popular.overview}</p>
                                <Link to={`/moviesPage/${popular.id}`}>
                                    <button className={s.button}>
                                        watch now
                                    </button>
                                </Link>
                                <div className={s.sliderBtnBox}>
                                    <button onClick={() => prevHandler()}>
                                        <RiArrowLeftDoubleLine />
                                    </button>
                                    <button onClick={() => nextHandler()}>
                                        <RiArrowRightDoubleFill />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Slider;

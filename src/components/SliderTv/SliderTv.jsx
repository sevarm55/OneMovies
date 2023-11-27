import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RiArrowLeftDoubleLine, RiArrowRightDoubleFill } from "react-icons/ri";

import { backdropPath } from "../../api/apiConfig";
import imdIcon from "../../util/svg/image3.svg";

import s from "./SliderTv.module.css";
import { Link } from "react-router-dom";
import { selectTvSeries } from "../../store/slices/tvSeries/tvSeriesSlices";
import { actionTvSeries } from "../../store/slices/tvSeries/action";

const SliderTv = () => {
    const tvSeries = useSelector(selectTvSeries);
    const [currentIndex, setCurrentIndex] = useState(0);
    const dispatch = useDispatch();
    console.log(tvSeries);
    useEffect(() => {
        dispatch(actionTvSeries());
    }, [dispatch]);

    const nextHandler = () => {
        if (currentIndex === tvSeries.length - 1) {
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
            {tvSeries.map((popular) => {
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
                                <h1>{popular.original_name || popular.name}</h1>
                                <div className={s.rating}>
                                    <img src={imdIcon} alt="" />
                                    <p>{popular.vote_average}</p>
                                </div>
                                <p>{popular.overview}</p>
                                <Link to={`${popular.id}`}>
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

export default SliderTv;

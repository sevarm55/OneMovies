import { useEffect } from "react";
import { FaPlay } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

import { posterPath } from "../../api/apiConfig";
import imdIcon from "../../util/svg/image3.svg";

import s from './TvSeriesCard.module.css'
import { Link } from "react-router-dom";
import { selectTvSeries } from "../../store/slices/tvSeries/tvSeriesSlices";
import { actionTvSeries } from "../../store/slices/tvSeries/action";

const TvSeriesCard = () => {
    const tvSeries = useSelector(selectTvSeries);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actionTvSeries());
    }, [dispatch]);


    return (
        <div className={s.moviesCardContainer}>
            <div className={s.titleBox}>
                <h2>MOVIES</h2>
            </div>
            <div className={s.moviesCardBox}>
                {tvSeries.map((movie) => {
                    return (
                        <Link to={`${movie.id}`} key={movie.id}>
                            <div
                                className={s.moviesCard}
                                style={{
                                    backgroundImage: `url(${posterPath(
                                        movie.poster_path
                                    )})`,
                                }}
                            >
                                <div className={s.shadow}>
                                    <div className={s.iconBox}>
                                        <FaPlay className={s.playIcon} />
                                    </div>
                                    <div className={s.contnetBox}>
                                        <div className={s.rating}>
                                            <img src={imdIcon} alt="" />
                                            <p>{movie.vote_average}</p>
                                        </div>
                                        <p className={s.data}>
                                            {movie.first_air_date.slice(0,4)}
                                        </p>
                                        <p className={s.movieTitle}>
                                            {movie.name || movie.original_name}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default TvSeriesCard;

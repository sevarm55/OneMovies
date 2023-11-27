import { useEffect } from "react";
import { FaPlay } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

import { selectMovies } from "../../store/slices/movies/moviesSlices";
import { actionFetchMovies } from "../../store/slices/movies/action";
import { posterPath } from "../../api/apiConfig";
import imdIcon from "../../util/svg/image3.svg";

import s from "./MoviesCard.module.css";
import { Link } from "react-router-dom";

const MoviesCard = () => {
    const movies = useSelector(selectMovies);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actionFetchMovies());
    }, [dispatch]);


    return (
        <div className={s.moviesCardContainer}>
            <div className={s.titleBox}>
                <h2>MOVIES</h2>
            </div>
            <div className={s.moviesCardBox}>
                {movies.map((movie) => {
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
                                            {movie.release_date.slice(0, 4)}
                                        </p>
                                        <p className={s.movieTitle}>
                                            {movie.title || movie.name}
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

export default MoviesCard;

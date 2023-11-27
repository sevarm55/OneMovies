import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { FaRegHeart, FaPlay } from "react-icons/fa";

import { selectMovies } from "../../store/slices/movies/moviesSlices";
import { actionFetchMovies } from "../../store/slices/movies/action";
import { backdropPath } from "../../api/apiConfig";
import { posterPath } from "../../api/apiConfig";
import imdIcon from "../../util/svg/image3.svg";

import { selectGenres } from "../../store/slices/genres/genresSlices";
import { actionGenres } from "../../store/slices/genres/action";
import { getGenres } from "../../hook/getGenres";
import { selectActors } from "../../store/slices/actors/actorsSlices";
import { actionActors } from "../../store/slices/actors/action";

import s from "./MoviesDetailPage.module.css";

const MoviesDetailPage = () => {
    const { id } = useParams();
    const { pathname } = useLocation();

    const movies = useSelector(selectMovies);
    const genres = useSelector(selectGenres);
    const actors = useSelector(selectActors);
    const [isLoading, setIsLoading] = useState(true);

    const dispatch = useDispatch();

    useEffect(() => {
        setTimeout(() => {
            dispatch(actionFetchMovies(id));
            dispatch(actionGenres());
            dispatch(actionActors(id));
            setIsLoading(false);
        }, 700);
    }, [dispatch, id]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const moviesDetail = movies.find((moviesEl) => String(moviesEl.id) === id);

    const allgenres =
        moviesDetail && moviesDetail.genre_ids
            ? getGenres(moviesDetail.genre_ids, genres)
            : [];


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
        <div className={s.moviesDetailPage}>
            <div
                className={s.bg}
                style={{
                    backgroundImage: `url(${
                        moviesDetail?.backdrop_path || moviesDetail?.poster_path
                            ? backdropPath(
                                  moviesDetail?.backdrop_path ||
                                      moviesDetail?.poster_path
                              )
                            : ""
                    })`,
                }}
            ></div>
            <div className={s.contentBox}>
                <div className={s.left}>
                    <img
                        src={`${posterPath(
                            moviesDetail?.poster_path ||
                                moviesDetail?.backdrop_path
                        )}`}
                        alt=""
                    />
                </div>
                <div className={s.right}>
                    <h2>
                        {moviesDetail?.title || moviesDetail?.original_title}{" "}
                        {moviesDetail?.release_date.slice(0, 4)}
                    </h2>
                    <div className={s.rating}>
                        <img src={imdIcon} alt="imdIcon" />
                        <p>{moviesDetail?.vote_average}</p>
                        <p>Genres : {allgenres.join(`,  `)}</p>
                    </div>
                    <p>{moviesDetail?.overview}</p>
                    <div className={s.buttons}>
                        <button className={s.like}>
                            <FaRegHeart />
                        </button>
                        <button className={s.play}>
                            <FaPlay />
                            watch now
                        </button>
                    </div>
                    <div className={s.actors}>
                        <div className={s.actorstitle}>
                            <p>Movies cast</p>
                        </div>
                        <div className={s.actorsContent}>
                            {actors.map((actor) => {
                                return (
                                    <div
                                        key={actor.id}
                                        className={s.actorsCard}
                                        style={{
                                            backgroundImage: actor.profile_path
                                                ? `url(${posterPath(
                                                      actor.profile_path
                                                  )})`
                                                : `url('https://via.placeholder.com/150')`,
                                        }}
                                    >
                                        <p>
                                            {actor.name || actor.original_name}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MoviesDetailPage;

import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { FaRegHeart, FaPlay } from "react-icons/fa";

import { backdropPath } from "../../api/apiConfig";
import { posterPath } from "../../api/apiConfig";
import imdIcon from "../../util/svg/image3.svg";

import { selectGenres } from "../../store/slices/genres/genresSlices";
import { actionGenres } from "../../store/slices/genres/action";
import { getGenres } from "../../hook/getGenres";
import { selectTvSeries } from "../../store/slices/tvSeries/tvSeriesSlices";
import { actionTvSeries } from "../../store/slices/tvSeries/action";
import { actionActorsTvSeries } from "../../store/slices/actorsTvSeries/action";
import { selectActorsTvSeries } from "../../store/slices/actorsTvSeries/actorsTvSeriesSlices";

import s from "./TvSerIesDetailPages.module.css";

const TvSerIesDetailPages = () => {
    const { id } = useParams();
    const { pathname } = useLocation();
    const TvSeries = useSelector(selectTvSeries);
    const genres = useSelector(selectGenres);
    const actorsTvSeries = useSelector(selectActorsTvSeries);
    const [isLoading, setIsLoading] = useState(true);

    const dispatch = useDispatch();

    useEffect(() => {
        setTimeout(() => {
            dispatch(actionTvSeries(id));
            dispatch(actionGenres());
            dispatch(actionActorsTvSeries(id));
            setIsLoading(false);
        }, 700);
    }, [dispatch, id]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const TvSeriesDetailes = TvSeries.find(
        (moviesEl) => String(moviesEl.id) === id
    );

    const allgenres =
        TvSeriesDetailes && TvSeriesDetailes.genre_ids
            ? getGenres(TvSeriesDetailes.genre_ids, genres)
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
                        TvSeriesDetailes?.backdrop_path ||
                        TvSeriesDetailes?.poster_path
                            ? backdropPath(
                                  TvSeriesDetailes?.backdrop_path ||
                                      TvSeriesDetailes?.poster_path
                              )
                            : ""
                    })`,
                }}
            ></div>
            <div className={s.contentBox}>
                <div className={s.left}>
                    <img
                        src={`${posterPath(
                            TvSeriesDetailes?.poster_path ||
                                TvSeriesDetailes?.backdrop_path
                        )}`}
                        alt=""
                    />
                </div>
                <div className={s.right}>
                    <h2>
                        {TvSeriesDetailes?.title ||
                            TvSeriesDetailes?.original_title}{" "}
                        {TvSeriesDetailes?.first_air_date.slice(0, 4)}
                    </h2>
                    <div className={s.rating}>
                        <img src={imdIcon} alt="imdIcon" />
                        <p>{TvSeriesDetailes?.vote_average}</p>
                        <p>Genres : {allgenres.join(`,  `)}</p>
                    </div>
                    <p>{TvSeriesDetailes?.overview}</p>
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
                            <p>TvSeries cast</p>
                        </div>
                        <div className={s.actorsContent}>
                            {actorsTvSeries.map((actorsTvSerie) => {
                                return (
                                    <div
                                        key={actorsTvSerie.id}
                                        className={s.actorsCard}
                                        style={{
                                            backgroundImage:
                                                actorsTvSerie?.profile_path
                                                    ? `url(${posterPath(
                                                          actorsTvSerie?.profile_path
                                                      )})`
                                                    : `url('https://via.placeholder.com/150')`,
                                        }}
                                    >
                                        <p>
                                            {actorsTvSerie.name ||
                                                actorsTvSerie.original_name}
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

export default TvSerIesDetailPages;

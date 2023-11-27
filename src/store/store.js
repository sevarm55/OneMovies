import { applyMiddleware, combineReducers, createStore } from "redux";
import { initialMovies, moviesReducer } from "./slices/movies/moviesSlices";
import { initialPopularMovies, popularMoviesReducer } from "./slices/popularMovies/popularMoviesSlices";
import thunk from "redux-thunk";
import { initialTvSeries, tvSeriesReducer } from "./slices/tvSeries/tvSeriesSlices";
import { genresReducer, initialGenres } from "./slices/genres/genresSlices";
import { actorsReducer, initialActors } from "./slices/actors/actorsSlices";
import { actorsTvSeriesReducer, initialActorsTvSeries } from "./slices/actorsTvSeries/actorsTvSeriesSlices";

const store = createStore(
    combineReducers({
        movies: moviesReducer,
        popularMovies: popularMoviesReducer,
        tvSeries: tvSeriesReducer,
        genres: genresReducer,
        actors:actorsReducer,
        actorsTvSeries:actorsTvSeriesReducer
    }),
    {
        movies: initialMovies,
        popularMovies: initialPopularMovies,
        tvSeries: initialTvSeries,
        genres: initialGenres,
        actors: initialActors,
        actorsTvSeries: initialActorsTvSeries
    },
    applyMiddleware(thunk)
);

export default store;

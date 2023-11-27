import { fetchPopularMoves } from "./PopularMoviesDataApi";

export const actionPopularMovies = () => {
    return async (dispatch) => {
        const result = await fetchPopularMoves();
        dispatch({ type: "fetchPopularMovies", payload: result.results });
    };
};

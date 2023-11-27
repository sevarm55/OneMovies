import { fetchMovies } from "./moviesDataApi";

export const actionFetchMovies = () => {
    return async (dispatch) => {
        const result = await fetchMovies();
        dispatch({ type: "fetchMovies", payload: result.results });
    };
};

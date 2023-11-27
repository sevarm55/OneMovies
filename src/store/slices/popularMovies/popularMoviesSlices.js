export const initialPopularMovies = [];

export const popularMoviesReducer = (state = initialPopularMovies, action) => {
    switch (action.type) {
        case "fetchPopularMovies":
            return action.payload;
        default:
            return state;
    }
};

export const selectPopularMovies = (state) => state.popularMovies;

const apiKey = "&&api_key=82018daf2d3709d864cbaa4558efc3d5";
const page = "&page=1";

export const MOVIES_URL = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US${page}&sort_by=popularity.desc${apiKey}`;
export const POPULAR_MOVIES_URL = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1${apiKey}`;

export const TVSERIES_URL = `https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US${page}&sort_by=popularity.desc${apiKey}`;

export const GENRES_URL = `https://api.themoviedb.org/3/genre/movie/list?language=en${apiKey}`;
export const GENRESTVSERIES_URL = `https://api.themoviedb.org/3/genre/tv/list?language=en${apiKey}`;


export const getActorsUrl = (id) => {
    return `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US${apiKey}`;
};

export const getActorsUrlTV = (id) => {
    return `https://api.themoviedb.org/3/tv/${id}/credits?language=en-US${apiKey}`;
};

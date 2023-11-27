export const getGenres = (genreId, allGenres) => {
    return genreId.map((id) => {
        const foundGenre = allGenres.find((genre) => genre.id === id);
        return foundGenre ? foundGenre.name : "";
    });
};
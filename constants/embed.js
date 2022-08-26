const embedMovie = (id) =>
    `https://www.2embed.to/embed/tmdb/movie?id=${id}`;
const embedEpisode = (id, season, episode) =>
    `https://www.2embed.to/embed/tmdb/tv?id=${id}&s=${season}&e=${episode}`;
 
export { embedMovie, embedEpisode };
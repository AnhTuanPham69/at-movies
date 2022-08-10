const embedMovie = (id) =>
    `https://www.2embed.org/embed/movie?tmdb=${id}`;
const embedEpisode = (id, season, episode) =>
    `https://www.2embed.org/embed/tv?tmdb=${id}&sea=${season}&epi=${episode}`;
 
export { embedMovie, embedEpisode };
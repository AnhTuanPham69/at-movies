const embedMovie = (id) =>
    `https://www.2embed.biz/embed/movie?tmdb=${id}`;
const embedEpisode = (id, season, episode) =>
    `https://www.2embed.biz/embed/tv?tmdb=${id}&sea=${season}&epi=${episode}`;
 
export { embedMovie, embedEpisode };
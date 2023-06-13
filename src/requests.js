const API_KEY = '5db22ccc15d9fef7a77edce2Be4a9814';




const requests = {

fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=123`,
fetchTopRated: `/movies/top_rated?api_key=${API_KEY}&language=en-US`,
fetchActionMovies: `/discover/movies?api_key=${API_KEY}&with_genres=28`,
fetchComedyMovies: `discover/movies?api_key=${API_KEY}&with_genres=35`,
fetchHorrorMovies: `discover/movies?api_key=${API_KEY}&with_genres=27`,
fetchRomanceMovies: `discover/movies?api_key=${API_KEY}&with_genres=10749`,
fetchDocumentaries: `discover/movies?api_key=${API_KEY}&with_genres=99`,





}

export default requests;
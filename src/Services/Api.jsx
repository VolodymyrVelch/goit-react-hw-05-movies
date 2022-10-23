// import PropTypes from 'prop-types';
import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '3e7e4bfa0442b0796c1ab4982aa49a79'


export async function getTrendingMovies() {
    const searchParams = `/trending/movie/day?api_key=${API_KEY}`
    const response = await axios.get(searchParams)
    return response.data
}

export async function getMoviesInfo(movie_id) {
    const searchParams = `/movie/${movie_id}?api_key=${API_KEY}`
    const response = await axios.get(searchParams)
    return response.data
}
export async function getRewiews(movie_id) {
    const searchParams = `/movie/${movie_id}/reviews?api_key=${API_KEY}`
    const response = await axios.get(searchParams)
    return response.data
}

export async function getCast(movie_id) {
    const searchParams = `/movie/${movie_id}/credits?api_key=${API_KEY}`
    const response = await axios.get(searchParams)
    return response.data
}

// export async function getSearch() {
//     const searchParams = `/search/movie?api_key=${API_KEY}`
//     const response = await axios.get(searchParams)
//     return response.data
// }









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





// const PIXABAY_KEY = '29209945-1fb6dc06427a139c565976a83';
// axios.defaults.baseURL = `https://pixabay.com/api`;

// export const getImages = async (query, perPage, page = 1) => {
//   const searchParams = new URLSearchParams({
//     key: PIXABAY_KEY,
//     q: query,
//     image_type: 'photo',
//     orientation: 'horizontal',
//     safesearch: true,
//     page: page,
//     per_page: perPage,
//   });
//   const response = await axios.get(`?${searchParams}`);
//   return response.data;
// };


// https://api.themoviedb.org/3/trending/all/day?api_key=<<api_key>>

//   createRequest.propType={
//     search: PropTypes.string.isRequired,
//     page: PropTypes.number.isRequired,
// }
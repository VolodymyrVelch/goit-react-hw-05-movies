import {FilmList, LinkStyle } from './Movielist.styled'
import { useLocation } from "react-router-dom";

const MovieList = ({ data }) => {
    const location = useLocation();
    return <FilmList>
                {data.map(movie => (<li key={movie.id}>
                    <LinkStyle to={`/movies/${movie.id}`} state={{ from: location }}>{movie.title}</LinkStyle></li>))}  
           </FilmList>
}
export default MovieList
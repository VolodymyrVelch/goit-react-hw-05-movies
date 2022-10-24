import PropTypes from 'prop-types'
import { FilmList, LinkStyle, ListComponents } from './Movielist.styled'
import { useLocation } from "react-router-dom";

const MovieList = ({ data }) => {
    const location = useLocation();
    return <FilmList>
                {data.map(movie => (<ListComponents key={movie.id}>
                    <LinkStyle to={`/movies/${movie.id}`} state={{ from: location }}>{movie.title}</LinkStyle></ListComponents>))}  
           </FilmList>
}
MovieList.propTypes = {
  data: PropTypes.array.isRequired,
}

export default MovieList


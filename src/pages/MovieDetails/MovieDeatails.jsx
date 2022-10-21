import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMoviesInfo } from "Services/Api";
import { Wrapper,Thumb, Poster, Genre } from "./MovieDetails.styled";

const MoviesDeatils = () => {
    const {id} = useParams()
    const [movie, setMovie] = useState('');
    
    useEffect(() => {
        const getMovie = async () => {
            try {
                const movie = await getMoviesInfo(id);
                setMovie(movie)
            }
            catch (error) {console.log(error) }
            }
       getMovie()
    }, [id]);
    
    console.log(movie)
    console.log(movie.poster_path)
    
    return <Wrapper>
        <Poster src={movie.poster_path? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`:'https://via.placeholder.com/300x400'} alt="" />
        <Thumb>
        <h2>{movie.title}</h2>
        <p>User score: {movie.vote_average/10*100 }%</p>
        <h3>Overview</h3>
        <p>{ movie.overview}</p>
        <h4>Genres</h4>
        <p>{movie.genres?movie.genres.map(genr => (<Genre key={genr.id}>{genr.name}</Genre>)): null}</p>
        </Thumb>
    </Wrapper>
}

export default MoviesDeatils
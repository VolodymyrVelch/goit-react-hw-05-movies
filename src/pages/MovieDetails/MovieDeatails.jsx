import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMoviesInfo } from "Services/Api";
import { Outlet } from "react-router-dom";
import BackLink from "components/BackLink/BackLink";
import { Wrapper, Thumb, Poster, Genre, AdditionalInfo } from "./MovieDetails.styled";

const MoviesDeatils = () => {
    const { id } = useParams()
    const [movie, setMovie] = useState('');
    const location = useLocation();
    const backLinkHref = location.state?.from ?? "/Movies";

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
    
  
    
    return <>
    <BackLink to={backLinkHref}>Back to movie</BackLink>
    <Wrapper>
        <Poster src={movie.poster_path? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`:'https://via.placeholder.com/300x400'} alt={`${movie.title} poster` } />
        <Thumb>
        <h2>{movie.title}</h2>
        <p>User score: {movie.vote_average/10*100 }%</p>
        <h3>Overview</h3>
        <p>{ movie.overview}</p>
        <h4>Genres</h4>
                <p>{movie.genres ? movie.genres.map(({ id, name }) => (<Genre key={id}>{name}</Genre>)): null}</p>
        </Thumb>
        </Wrapper>
        <h5>Additional information</h5>
        <AdditionalInfo to='Cast'>Cast</AdditionalInfo>
        <AdditionalInfo to='Reviews'>Rewiews</AdditionalInfo>
        <Outlet/>
    </>
}

export default MoviesDeatils
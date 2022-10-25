import PropTypes from 'prop-types'
import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMoviesInfo } from "Services/Api";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import BackLink from "components/BackLink/BackLink";
import {Title, Wrapper, Thumb, Poster, Genre, AdditionalInfo,TitleAdditional, RoutesBox } from "./MovieDetails.styled";

const MoviesDeatils = () => {
    const { id } = useParams()
    const [movie, setMovie] = useState('');
    const location = useLocation();
    const backLinkHref = location.state?.from ?? "/Movies";
    const { poster_path, title } = movie;

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
        <Poster src={poster_path? `https://image.tmdb.org/t/p/w500/${poster_path}`:'https://via.placeholder.com/300x400'} alt={`${title} poster` } />
        <Thumb>
        <Title>{movie.title}</Title>
        <p>User score: {movie.vote_average/10*100 }%</p>
        <h3>Overview</h3>
        <p>{ movie.overview}</p>
        <h4>Genres</h4>
                <p>{movie.genres ? movie.genres.map(({ id, name }) => (<Genre key={id}>{name}</Genre>)): null}</p>
        </Thumb>
        </Wrapper>
        <TitleAdditional>Additional information</TitleAdditional>
        <RoutesBox>
        <AdditionalInfo to='Cast'>Cast</AdditionalInfo>
        <AdditionalInfo to='Reviews'>Reviews</AdditionalInfo>
        </RoutesBox>
        <Suspense fallback={<div>Loading ...</div>}></Suspense>
        <Outlet />
        <Suspense/>
    </>
}
MoviesDeatils.propTypes = {
id: PropTypes.object,
location: PropTypes.object
}
export default MoviesDeatils
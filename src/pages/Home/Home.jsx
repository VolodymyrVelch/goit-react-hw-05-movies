import { getTrendingMovies } from '../../Services/Api'
import { useEffect, useState} from 'react';
import {FilmList, List, LinkStyle } from './Home.styled';
// import { Movies } from 'pages/Movies';
// import { Link } from 'react-router-dom';

 const Home = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const getTrending = async () => {
            try {
                const data = await getTrendingMovies();
                setData(data.results)
            }
            catch (error) {console.log(error) }
            }
        getTrending()
    }, []);
  
    return (
    <div>
        <h1>Tranding today</h1>
        <FilmList>
                {data.map(movie => (<List key={movie.id}>
                    <LinkStyle to={`/movies/${movie.id}`}>{movie.title}</LinkStyle></List>))}  
        </FilmList>
    </div>
    )
}
export default Home
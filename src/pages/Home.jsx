import { getTrendingMovies } from '../Services/Api'
import { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
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
    // console.log(data)
    return (
    <div>
        <h1>Tranding today</h1>
        <ul>
                {data.map(movie => (<li key={movie.id}>
                    <Link to={`/movies/${movie.id}`}>{movie.title}</Link></li>))}  
        </ul>
    </div>
    )
}
export default Home
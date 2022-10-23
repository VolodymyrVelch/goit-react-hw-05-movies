import { getTrendingMovies } from '../../Services/Api'
import { useEffect, useState} from 'react';
import MovieList from 'components/MovieList/MovieList';


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
            <MovieList data={data} />
    </div>
    )
}
export default Home

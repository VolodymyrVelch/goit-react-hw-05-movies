import { getTrendingMovies } from '../../Services/Api'
import { useEffect, useState} from 'react';
import MovieList from 'components/MovieList/MovieList';
import { Title } from './Home.styled';


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
            <Title>Tranding today</Title>
            <MovieList data={data} />
    </div>
    )
}
export default Home

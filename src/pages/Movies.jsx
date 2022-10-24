import { SearchBox } from "components/SearchBox/SearchBox"
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom";
import { getSearch } from '../Services/Api'
import Notiflix from "notiflix";
import MovieList from "components/MovieList/MovieList";


const Movies = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [queryResponse, setQueryResponse] = useState([]);
    const queryRequest = searchParams.get("query") || '';
    
    useEffect(() => {
        if (!queryRequest) {
                return
        } else {
            
            const Query = async () => {
            try {
                const data = await getSearch(queryRequest);
                const queryData = data
                setQueryResponse(queryData)
            }
            catch (error) {console.log(error) }
        }
        Query()
            }
    }, [queryRequest]);
    
    const onSubmit = (e) => {
        e.preventDefault();
        const searchParams = e.target.elements.query.value
        if (searchParams.trim() === '') {
            Notiflix.Notify.warning('Please type your request')
        }
        setSearchParams({query:searchParams})
    }


    return <div>
        <SearchBox onSubmit={onSubmit} />
        <MovieList data={queryResponse} />
    </div>
}

export default Movies
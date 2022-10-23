import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { getCast } from "Services/Api"
import { Poster } from "./Cast.styled";

const Cast = () => {
    const { id } = useParams()
    const [cast, setCast] = useState([]);

    useEffect(() => {
            const Cast = async () => {
            try {
                const credits = await getCast(id);
                const castData = credits.cast
                setCast(castData)
            }
            catch (error) {console.log(error) }
        }
        Cast()
    }, [id]);
    
    return <>
            <ul>
                {cast.map(({ name, character, id, profile_path}) =>
                    <li key={id}>
                        <Poster src={profile_path?`https://image.tmdb.org/t/p/w500/${profile_path}`:'https://via.placeholder.com/100x200'} alt={`${name}'s poster`} />
                        <h5>{name}</h5>
                        <p>{character}</p>
                    </li>
                )}
            </ul>
    </>
}

export default Cast
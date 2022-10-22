import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { getRewiews } from "Services/Api"


const Reviews = () => {
    const { id } = useParams()
    const [rew, setRew] = useState([]);

    useEffect(() => {
            const getRewiev = async () => {
            try {
                const response = await getRewiews(id);
                const rew = response.results
                setRew(rew)
            }
            catch (error) {console.log(error) }
            }
       getRewiev()
    }, [id]);

    return <>
        {rew.length>0?
            (<ul>
                {(rew.map(({ author, content }, index) =>
                    <li key={index}>
                        <h5>{author}</h5>
                        <p>{content}</p>
                    </li>
                ))}
            </ul>):
            (<p>We don't have any reviews for this movie</p>)
        }
    </>
}

export default Reviews
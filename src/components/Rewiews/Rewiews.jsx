import PropTypes from 'prop-types'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { getRewiews } from "Services/Api"
import { ReviewList,ReviewItem,ReviewAuthor,ReviewCont } from './Reviews.styled';


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
            (<ReviewList>
                {(rew.map(({ author, content }, index) =>
                    <ReviewItem key={index}>
                        <ReviewAuthor>{author}</ReviewAuthor>
                        <ReviewCont>{content}</ReviewCont>
                    </ReviewItem>
                ))}
            </ReviewList>):
            (<p>We don't have any reviews for this movie</p>)
        }
    </>
}
Reviews.propTypes = {
    id: PropTypes.object,
}

export default Reviews
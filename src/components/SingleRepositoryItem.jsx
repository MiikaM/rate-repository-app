import { View } from "react-native";
import useRepository from "./hooks/useRepository";
import { useParams } from "react-router-native";
import useReviews from "./hooks/useReviews";
import SingleRepositoryContainer from "./SingleRepositoryContainer";


const SingleRepositoryItem = () => {
    // Change to get one repository info
    const { repositoryId } = useParams();
    const { data, loading } = useRepository({ id: repositoryId });
    const { reviews, reviewsLoading } = useReviews({ id: repositoryId });

    console.log('Happens', {data,reviews});
    
    return (
        <View>
            {(reviewsLoading || loading) ? null : <SingleRepositoryContainer reviews={reviews.repository.reviews} repository={data.repository} />}
        </View>
    )
}

export default SingleRepositoryItem;
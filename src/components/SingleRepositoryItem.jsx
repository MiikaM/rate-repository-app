import { View } from "react-native";
// import ReviewsSection from "./ReviewsSection";
import useRepository from "./hooks/useRepository";
import { useParams } from "react-router-native";
import RepositoryItem from "./RepositoryItem";


const SingleRepositoryItem = () => {
    // Change to get one repository info
    const { repositoryId } = useParams();
    const { data, loading } = useRepository({ id: repositoryId });

    

    return (
        <View>
            {loading ? null : <RepositoryItem item={data.repository} itemView={true} />}

            {/* // <ReviewsSection /> */}
        </View>
    )
}

export default SingleRepositoryItem;
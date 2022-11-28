import { View } from "react-native";
import ReviewsSection from "./ReviewsSection";
import RepositoryItem from "./RepositoryItem";


const SingleRepository = () => {
 
    return (
        <View>
            <RepositoryInfo />
            <ReviewsSection />
        </View>
    )
}

export default SingleRepository;
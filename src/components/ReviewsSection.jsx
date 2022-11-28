import { FlatList } from "react-native-web"
import RepositoryInfo from "./RepositoryInfo";
import ReviewItem from "./ReviewItem";


const ReviewsSection = ({repositoryId, repository}) => {
    //Implement
    const {data} = useReviews();
    

    return (
        <FlatList 
        data={data.reviews}
        renderItem ={({item}) => <ReviewItem review={item} />}
        keyExtractor={({id}) => id}
        ListHeaderComponent = {() => <RepositoryInfo item={repository} />} />
    );

}

export default ReviewsSection;
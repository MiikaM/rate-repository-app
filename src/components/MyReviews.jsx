import { View } from "react-native";
import useCheckUser from "./hooks/useCheckUser"
import MyReviewsContainer from "./MyReviewsContainer";



const MyReviews = () => {
    const { data, loading } = useCheckUser({ withReviews: true });

    return (
        <View>
            {
                loading ? null : <MyReviewsContainer reviews={data.me.reviews} />
            }
        </View>
    )
}

export default MyReviews
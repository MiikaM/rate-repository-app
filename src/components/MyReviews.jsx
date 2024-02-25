import { useEffect } from "react";
import { View } from "react-native";
import { useNavigate } from "react-router-native";
import useCheckUser from "./hooks/useCheckUser"
import useDeleteReview from "./hooks/useDeleteReview";
import MyReviewsContainer from "./MyReviewsContainer";



const MyReviews = () => {
    const { data, loading, refetch } = useCheckUser({ withReviews: true });
    const [removeReview] = useDeleteReview()
    const navigate = useNavigate();

    const navigateRepository = (variables) => {
        navigate(`/repository/${variables.id}`);
    }

    const handleDeleteReview = (variables) => {
        removeReview({ id: variables.id });
        refetch();
    }

    useEffect(() => {
        if (!loading && !data?.me) navigate("../", { replace: true });
    }, [])


    return (
        <>
        {
            loading ? null :
                <View>
                    <MyReviewsContainer reviews={data?.me?.reviews} navigation={navigateRepository} deleteReview={handleDeleteReview} />
                </View>
        }
        </>
    )
}

export default MyReviews
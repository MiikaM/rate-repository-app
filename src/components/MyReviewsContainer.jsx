import { FlatList, StyleSheet } from "react-native"
import ItemSeparator from "./ItemSeparator";
import ReviewItem from "./ReviewItem";


const styles = StyleSheet.create({
    separator: {
        height: 5,
    },
    container: {
        backgroundColor: "#E1E5E8",
        height: "88%"
    }
});

const MyReviewsContainer = (props) => {

    let reviewNodes = props.reviews
    ? props.reviews.edges.map((edge) => edge.node)
    : [];

    return (
        <FlatList style={styles.container}
            data={reviewNodes}
            ItemSeparatorComponent={ItemSeparator}
            renderItem={({ item }) => <ReviewItem item={item} navigation={props.navigation} myReviews={true} deleteReview={props.deleteReview} />}
        />
    )
}

export default MyReviewsContainer
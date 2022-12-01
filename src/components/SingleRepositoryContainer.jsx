import { FlatList, StyleSheet } from "react-native"
import ItemSeparator from "./ItemSeparator";
import RepositoryItem from "./RepositoryItem";
import ReviewItem from "./ReviewItem";

const styles = StyleSheet.create({
    flatList: {
        height: "88%"
    }
})

const SingleRepositoryContainer = ({ reviews, repository, onEndReach }) => {
    //Implement    
    const reviewNodes = reviews
        ? reviews.edges.map((edge) => edge.node)
        : [];

    return (
        <FlatList
            style={styles.flatList}
            data={reviewNodes}
            renderItem={({ item }) => <ReviewItem item={item} />}
            keyExtractor={({ id }) => id}
            onEndReached={onEndReach}
            onEndReachedThreshold={0.5}
            ItemSeparatorComponent={ItemSeparator}
            ListHeaderComponent={() => <RepositoryItem item={repository} itemView={true} />} />
    );

}

export default SingleRepositoryContainer;
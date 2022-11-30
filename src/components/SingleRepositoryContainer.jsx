import { FlatList, StyleSheet, View } from "react-native"
import RepositoryItem from "./RepositoryItem";
import ReviewItem from "./ReviewItem";

const styles = StyleSheet.create({
    separator: {
        height: 5
    }
}) 

const ItemSeparator = () => <View style={styles.separator} />;

const SingleRepositoryContainer = ({ reviews, repository, onEndReach }) => {
    //Implement    
    const reviewNodes = reviews
        ? reviews.edges.map((edge) => edge.node)
        : [];
        
    return (
        <FlatList
            data={reviewNodes}
            renderItem={({ item }) => <ReviewItem item={item} />}
            keyExtractor={({ id }) => id}
            onEndReached={onEndReach}
            ItemSeparatorComponent={ItemSeparator}
            ListHeaderComponent={() => <RepositoryItem item={repository} itemView={true} />} />
    );

}

export default SingleRepositoryContainer;
import { Alert, StyleSheet, View } from "react-native";
import Button from "./Button";
import Card from "./Card";
import Text from "./Text";

const styles = StyleSheet.create({
    flexBox: {
        display: "flex",
        flexDirection: "row",
        padding: 10,
        maxWidth: "90%"
    },
    flexItem: {
        flexGrow: 1,
        margin: 2,
    },
    rating: {
        textAlign: "center",
        textAlignVertical: "center",
        borderColor: "#1C59B3",
        color: "#1C59B3",
        borderWidth: 2,
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
        marginTop: 5
    }
});

const ReviewItem = ({ item, myReviews = false, navigation, deleteReview }) => {
    const date = new Date(item.createdAt);
    const formattedDate = `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;

    const handleDeleteReview = () => {
        console.log('Deleting a review!');
        deleteReview({ id: item.id });
    }

    const handleNavigate = () => {
        navigation({ id: item.repositoryId })

    }

    const createTwoButtonAlert = () =>
        Alert.alert(
            "Delete review",
            "Are you sure you want to delete this review?",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {
                    text: "Delete",
                    onPress: () => handleDeleteReview()
                }
            ]
        );

    return (
        <Card testID="repositoryItem"  >
            <View style={styles.flexBox}>
                <Text style={styles.rating} fontSize="subheading" fontWeight="bold">{item?.rating}</Text>
                <View>
                    <Text fontWeight="bold">{item?.user?.username}</Text>
                    <Text>{formattedDate}</Text>
                    <Text>{item?.text}</Text>
                </View>
            </View>
            {
                myReviews ? <View style={styles.flexBox}>
                    <Button onPress={handleNavigate} title="View repository" />
                    <Button onPress={createTwoButtonAlert} title="Delete review" />
                </View> : null
            }

        </Card>


    )
}

export default ReviewItem;
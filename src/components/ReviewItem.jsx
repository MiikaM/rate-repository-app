import { StyleSheet, View } from "react-native";
import Card from "./Card";
import Text from "./Text";

const styles = StyleSheet.create({
    flexBox: {
        display: "flex",
        flexDirection: "row",
        // flexWrap: "wrap",
        padding: 10,
        // margin: 5,
        maxWidth: "90%"
    },
    flexItem: {
        flexGrow: 1,
        margin: 2,
        // maxWidth: "50%"
    },
    rating: {
        textAlign: "center",
        textAlignVertical: "center",
        // textAlignHorizontal: "center",
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

const ReviewItem = ({ item }) => {
    const date = new Date(item.createdAt);
    const formattedDate = `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;

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
        </Card>


    )
}

export default ReviewItem;
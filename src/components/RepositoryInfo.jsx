import { Image, View } from "react-native";
import Card from "./Card";
import Stat from "./Stat";
import Tag from "./Tag"
import Text from "./Text";

const styles = StyleSheet.create({
    flexBox: {
        display: "flex",
        flexDirection: "row",
        padding: 5,
        // alignItems: "center"
    },
    flexItem: {
        flexGrow: 1,
        margin: 2
    },
    flexStats: {
        paddingRight: 20,
        paddingLeft: 40
    },

    tinyLogo: {
        width: 50,
        height: 50,
        borderRadius: 5,
        // marginLeft: 10,
        marginRight: 10
    }
});

const RepositoryInfo = ({item})=> {

    return (
        <Card testID="repositoryItem">
            <View style={styles.flexBox}>
                <Image style={styles.tinyLogo} source={{ uri: item.ownerAvatarUrl }} />
                <View >
                    <Text testID="name" style={styles.flexItem} fontWeight="bold">{item.fullName}</Text>
                    <Text testID="description" style={styles.flexItem}>{item.description}</Text>
                    <Tag styles={styles.flexItem} text={item.language} />
                </View>
            </View>
            <View style={[styles.flexBox, styles.flexStats]}>
                <Stat styles={styles.flexItem} description="Forks" stat={item.forksCount} />
                <Stat styles={styles.flexItem} description="Stars" stat={item.stargazersCount} />
                <Stat styles={styles.flexItem} description="Reviews" stat={item.reviewCount} />
                <Stat styles={styles.flexItem} description="Rating" stat={item.ratingAverage} />
            </View>
            {/* Need button */}


        </Card>
    )

}
export default RepositoryInfo;
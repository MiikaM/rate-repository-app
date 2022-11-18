import { Image, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
        paddingTop: 5,
        paddingLeft: 10,
        margin: 10,
        borderColor: "black",
        borderWidth: 2,
    },
    flexBox: {
        display: "flex",
        flexDirection: "row",
        padding: 5
    },
    flexItem: {
        flexGrow: 1
    },
    tinyLogo: {
        width: 50,
        height: 50,
        borderRadius: 5
    }
});

const RepositoryItem = ({ item }) => {

    return (
        <View style={styles.container}>
            <View style={styles.flexBox}>
                <Image style={styles.tinyLogo} source={{ uri: item.ownerAvatarUrl }} />
                <Text style={styles.flexItem}>Full name: {item.fullName}</Text>
                <Text style={styles.flexItem}>Description: {item.description}</Text>
                <Text >Language: {item.language}</Text>
            </View>
            <View style={styles.flexBox}>
                <View style={styles.flexItem}>
                    <Text>{item.forksCount}</Text>
                    <Text>Forks</Text>

                </View>
                <View style={styles.flexItem}>
                    <Text>{item.stargazersCount}</Text>
                    <Text>Stars</Text>

                </View >
                <View style={styles.flexItem}>
                    <Text>{item.ratingAverage}</Text>
                    <Text>Rating</Text>

                </View>
                <View style={styles.flexItem}>
                    <Text>{item.reviewCount}</Text>
                    <Text>Reviews</Text>
                </View>
            </View>
        </View>
    );
}

export default RepositoryItem;
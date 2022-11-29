import {

    Image, StyleSheet,
    View
} from 'react-native';
import Card from './Card';
import Tag from './Tag';
import Stat from './Stat';
import Text from './Text';
import Button from './Button';
import * as Linking from 'expo-linking';

const styles = StyleSheet.create({
    flexBox: {
        display: "flex",
        flexDirection: "row",
        padding: 5,
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
        marginRight: 10
    }
});

const RepositoryItem = ({ item, navigation, itemView = false }) => {
    const navigate = (event) => {
        event.preventDefault();
        !itemView ? navigation({ id: item.id }) : null;
    }

    const openGithub = (event) => {
        event.preventDefault();
        console.log('This happens');

        Linking.openURL(item.url);
    }

    if (!item) return null;

    return (
        <Card testID="repositoryItem" onPress={!itemView ? navigate : null} >
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
            {
                itemView ? <Button onPress={openGithub} title='Open in GitHub' /> : null
            }

        </Card>

    );
}

export default RepositoryItem;
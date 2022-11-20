import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import Text from './Text';
import { Link } from 'react-router-native';


const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight + 20,
        backgroundColor: theme.colors.textPrimary,
        paddingBottom: 20,
        paddingRight: 10,
    },
    scrollViewContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    scrollViewItem: {
        paddingLeft: 10
    }
    // ...
});

const AppBar = () => {
    return (
        <View style={styles.container}>
            <ScrollView horizontal contentContainerStyle={styles.scrollViewContainer}>
                <Link style={styles.scrollViewItem} to="/" >
                    <Text fontWeight="bold" color="off-white" fontSize="subheading">Repositories</Text>
                </Link>
                <Link style={styles.scrollViewItem} to="/signIn" >
                    <Text fontWeight="bold" color="off-white" fontSize="subheading">Sign in</Text>
                </Link>
            </ScrollView>

        </View >);
};

export default AppBar;
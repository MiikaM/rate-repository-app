import { View, StyleSheet, ScrollView, Pressable } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import Text from './Text';
import { Link, useNavigate } from 'react-router-native';
import { useApolloClient } from '@apollo/client';
import useCheckUser from './hooks/useCheckUser';
import useAuthStorage from './hooks/useAuthStorage';


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
});

const AppBar = () => {
    const authStorage = useAuthStorage();
    const { data } = useCheckUser();
    const navigate = useNavigate();
    const apolloClient = useApolloClient();

    const signOut = (e) => {
        e.preventDefault();
        authStorage.removeAccessToken();
        apolloClient.resetStore();
        navigate("../", { replace: true });
    }

    return (
        <View style={styles.container}>
            <ScrollView horizontal contentContainerStyle={styles.scrollViewContainer}>
                <Link style={styles.scrollViewItem} to="/" >
                    <Text fontWeight="bold" color="off-white" fontSize="subheading">Repositories</Text>
                </Link>
                {
                    data?.me ? <Link style={styles.scrollViewItem} to="/review/create" >
                        <Text fontWeight="bold" color="off-white" fontSize="subheading">Create a review</Text>
                    </Link> : null
                }
                {
                    data?.me ? <Link style={styles.scrollViewItem} to="/me/reviews" >
                        <Text fontWeight="bold" color="off-white" fontSize="subheading">My reviews</Text>
                    </Link> : null
                }
                {
                    data?.me ? <Pressable style={styles.scrollViewItem} onPress={signOut} >
                        <Text fontWeight="bold" color="off-white" fontSize="subheading">Sign Out</Text>
                    </Pressable> : <Link style={styles.scrollViewItem} to="/signIn" >
                        <Text fontWeight="bold" color="off-white" fontSize="subheading">Sign in</Text>
                    </Link>
                }
                {
                    data?.me ? null : <Link style={styles.scrollViewItem} to="/user/create" >
                        <Text fontWeight="bold" color="off-white" fontSize="subheading">Sign Up</Text>
                    </Link>
                }
            </ScrollView>

        </View >);
};

export default AppBar;
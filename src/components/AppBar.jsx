import { View, StyleSheet, Pressable } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import Text from './Text';


const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight + 10,
        backgroundColor: theme.colors.textPrimary,
        padding: 10,
        marginBottom: 10
    },
    // ...
});

const AppBar = () => {
    return (
    <View style={styles.container}>
        <Pressable>
            <Text fontWeight="bold" color="off-white">Repositories</Text>                        
        </Pressable>
    </View>);
};

export default AppBar;
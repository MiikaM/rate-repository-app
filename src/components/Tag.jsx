import { StyleSheet, Text, View } from "react-native"
import theme from "../theme"

const styles = StyleSheet.create({
    container: {
        maxWidth: 80,
        borderRadius: 5,
        backgroundColor: "#0863DD",
        
    },
    text: {
        color: theme.colors.offWhite,
        alignSelf: "center",
        padding: 5,
    }
})

const Tag = (props) => {
    return <View style={[styles.container, props.styles]}  >
        <Text style={styles.text} {...props}> {props.text}</Text>
    </View>
}

export default Tag
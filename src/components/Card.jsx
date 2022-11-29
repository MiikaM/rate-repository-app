import { Pressable, StyleSheet, View } from "react-native"
// import theme from "../theme"

const styles = StyleSheet.create({
    container: {
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 5,
        borderRadius: 1,
        shadowColor: "black",
        shadowOffset: { width: 0, height: -4 },
        shadowRadius: 10,
        shadowOpacity: 0.1,
        elevation: 1,
        backgroundColor: "white"
    }
})

const Card = (props) => {

    return <Pressable onPress={props.onPress}><View style={[styles.container, props.styles]} {...props} /></Pressable>
}

export default Card

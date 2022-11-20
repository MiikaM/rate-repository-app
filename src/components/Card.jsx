import { StyleSheet, View } from "react-native"
// import theme from "../theme"

const styles = StyleSheet.create({
    container: {
        // paddingTop: 5,
        paddingLeft: 10,
        marginBottom: 5,
        borderRadius: 1,
        shadowColor: "black",
        shadowOffset: {width: 0, height: -4},
        shadowRadius: 10,
        shadowOpacity: 0.1,
        // boxShadow: "10px 10px 17px -12px rgba(0,0,0,0.75)",
        elevation: 1,
        backgroundColor: "white"
    }
})

const Card = ( props) => {

    return <View style={[styles.container, props.styles]} {...props}/>
}

export default Card

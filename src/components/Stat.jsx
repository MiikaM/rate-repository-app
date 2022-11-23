import { StyleSheet,  View } from "react-native"
import theme from "../theme";
import Text from "./Text";

const styles = StyleSheet.create({
    container: {
        color: theme.colors.textPrimary
    },
    text: {
        fontWeight: "bold"
    }
})

const LookUp = [
    {
        key: "k",
        value: 1e3
    },
    {
        key: "M",
        value: 1e6
    },
    {
        key: "G",
        value: 1e9
    },
    {
        key: "T",
        value: 1e12
    },
    {
        key: "P",
        value: 1e15
    },
    {
        key: "E",
        value: 1e18
    }
];

const statFormatter = (number) => {
    // console.log(typeof number);
    // if (typeof(number) !== "number" || typeof(number) !== "bigint") return "";
    for (let index = LookUp.length - 1; index >= 0; index--) {
        if (number >= LookUp[index].value) {
            const formattedNumber = `${(number / LookUp[index].value).toFixed(
                1
            )}${LookUp[index].key}`;
            return formattedNumber;
        }
    }
    return `${number}`;
};


const Stat = (props) => {
    if (!props)
        return

    return <View style={[styles.container, props.styles]} {...props}>
        <Text fontWeight="bold">
            {statFormatter(props.stat)}
        </Text>
        <Text>
            {props.description}
        </Text>
    </View>
}

export default Stat
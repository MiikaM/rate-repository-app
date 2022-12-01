import { Pressable, View } from "react-native"
import { StyleSheet } from "react-native-web"
import Card from "./Card"
import FormikTextInput from "./FormikTextInput"
import Text from "./Text"
import * as yup from 'yup'
import { Formik } from "formik"

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#0165D4",
        alignItems: "center",
        padding: 10,
        marginTop: 5,
        borderRadius: 5
    },
})

const validationSchema = yup.object().shape({
    username: yup.string().required('Username is required'),
    password: yup.string().min(5, 'Password must be longer or equal than 5 characters').required('Password is required')
});


const SignInForm = ({ onSubmit }) => {

    const handleSubmit = (values) => {
        onSubmit(values);
    }

    const initialValues = {
        username: "",
        password: ""
    }

    return (
        <Card styles={{ padding: 10 }} >
            <Formik validationSchema={validationSchema} initialValues={initialValues} onSubmit={handleSubmit}>
                {({ handleSubmit }) => (
                    <View>
                        <FormikTextInput name="username" placeholder="Username" />
                        <FormikTextInput name="password" placeholder="Password" secureTextEntry />
                        <Pressable style={styles.button} onPress={handleSubmit}>
                            <Text color="off-white" fontWeight="bold">Sign In</Text>
                        </Pressable>
                    </View>)}
            </Formik>
        </Card>)
}

export default SignInForm;
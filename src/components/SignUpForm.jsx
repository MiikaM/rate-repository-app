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
    username: yup.string().required('Username is required').min(1, 'Username too short! Must have the length between 1 and 30 characters.').max(30, 'Username too long! Must have the length between 1 and 30 characters.'),
    password:  yup.string().required('Password is required').min(5, 'Password too short! Must have the length between 5 and 50 characters.').max(50, "Password too short! Must have the length between 5 and 50 characters." ),
    passwordConfirmation: yup.string().required('Confirm your password').oneOf([yup.ref('password'), null], "Passwords must match")
});


const SignUpForm = ({ onSubmit }) => {

    const handleSubmit = (values) => {
        console.dir({values});        
        onSubmit(values);
    }

    const initialValues = {
        username: "",
        password: "",
        passwordConfirmation: "",
    }

    return (
        <Card styles={{ padding: 10 }} >
            <Formik validationSchema={validationSchema} initialValues={initialValues} onSubmit={handleSubmit}>
                {({ handleSubmit }) => (
                    <View>
                        <FormikTextInput name="username" placeholder="Username" />
                        <FormikTextInput name="password" placeholder="Password" secureTextEntry/>
                        <FormikTextInput name="passwordConfirmation" placeholder="Password confirmation" secureTextEntry/>
                        <Pressable style={styles.button} onPress={handleSubmit}>
                            <Text color="off-white" fontWeight="bold">Sign Up</Text>
                        </Pressable>
                    </View>)}
            </Formik>
        </Card>)
}

export default SignUpForm;
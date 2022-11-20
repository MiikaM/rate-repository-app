import { Formik } from 'formik';
import { Pressable, StyleSheet, View } from 'react-native';
import Card from './Card';
import FormikTextInput from './FormikTextInput';
import Text from './Text';
import * as yup from "yup"

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
    username: yup.string().min(8, 'Username must be longer or equal than 8 characters').required('Username is required'),
    password: yup.string().min(5, 'Password must be longer or equal than 5 characters').required('Password is required')
});

const SignIn = () => {

    const onSubmit = (values) => {
        console.log(values);
    };
    const initialValues = {
        username: "",
        password: ""
    }


    return (
        <Card styles={{ padding: 10 }} >
            <Formik validationSchema={validationSchema} initialValues={initialValues} onSubmit={onSubmit}>
                {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
            </Formik>
        </Card>
    );
};

const SignInForm = ({ onSubmit }) => {
    return <View>
        <FormikTextInput name="username" placeholder="Username" />
        <FormikTextInput name="password" placeholder="Password" secureTextEntry />
        <Pressable style={styles.button} onPress={onSubmit}>
            <Text color="off-white" fontWeight="bold">Sign In</Text>
        </Pressable>
    </View>
}

export default SignIn;
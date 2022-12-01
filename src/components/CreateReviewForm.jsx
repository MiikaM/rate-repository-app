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
    ownerName: yup.string().required('Repository owners name is required'),
    repositoryName: yup.string().required('Repository name is required'),
    rating: yup.number("The value must be a number between 0 and 100!").integer("The value must be an integer type!").min(0, "You can give a minimum rating of 0!").max(100, "You can give a maximum rating of 100!").required("Rating is required!")

});


const CreateReviewForm = ({ onSubmit }) => {

    const handleSubmit = (values) => {       
        onSubmit(values);
    }

    const initialValues = {
        ownerName: "",
        repositoryName: "",
        rating: "",
        text: ""
    }

    return (
        <Card styles={{ padding: 10 }} >
            <Formik validationSchema={validationSchema} initialValues={initialValues} onSubmit={handleSubmit}>
                {({ handleSubmit }) => (
                    <View>
                        <FormikTextInput name="ownerName" placeholder="Repository owner name" />
                        <FormikTextInput name="repositoryName" placeholder="Repository name" />
                        <FormikTextInput name="rating" placeholder="Rating between 0 and 100" />
                        <FormikTextInput name="text" placeholder="Review" multiline />
                        <Pressable style={styles.button} onPress={handleSubmit}>
                            <Text color="off-white" fontWeight="bold">Create a review</Text>
                        </Pressable>
                    </View>)}
            </Formik>
        </Card>)
}

export default CreateReviewForm;
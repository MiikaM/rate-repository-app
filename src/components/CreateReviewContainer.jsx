import useSignIn from './hooks/useSignIn';
import { useNavigate } from 'react-router-native';
import SignInForm from './SignInForm';
import CreateReviewForm from './CreateReviewForm';

const SignInContainer = () => {
    const [createReview] = useCreateReview();
    let navigate = useNavigate();

    const onSubmit = async (values) => {
        const { username, name, rating, text } = values;
        try {
            const { data } = await createReview({ username, name, rating, text });
            console.log(`Congratulations you logged in as user with accesstoken: ${data.authenticate.accessToken}`);
            navigate("../", { replace: true })
        } catch (error) {
            console.error({ error });
        }
    };



    return (
        <CreateReviewForm onSubmit={onSubmit} />
    );
};


export default SignInContainer;
import useSignIn from './hooks/useSignIn';
import { useNavigate } from 'react-router-native';
import SignInForm from './SignInForm';

const SignInContainer = () => {
    const [signIn] = useSignIn();
    let navigate = useNavigate();

    const onSubmit = async (values) => {
        const { username, password } = values;
        try {
            // eslint-disable-next-line no-unused-vars
            const { data } = await signIn({ username, password });
            navigate("../", { replace: true })
        } catch (error) {
            console.error({ error });
        }
    };



    return (
        <SignInForm onSubmit={onSubmit} />
    );
};


export default SignInContainer;
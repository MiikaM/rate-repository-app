import { useNavigate } from 'react-router-native';
import useSignIn from './hooks/useSignIn';
import useSignUp from './hooks/useSignUp';
import SignUpForm from './SignUpForm';

const SignUpContainer = () => {
    const [signUp] = useSignUp();
    const [signIn] = useSignIn();
    const navigate = useNavigate();

    const onSubmit = async (values) => {
        const { username, password } = values;
        try {
            // eslint-disable-next-line no-unused-vars
            const { data } = await signUp({ username, password });
            // eslint-disable-next-line no-unused-vars
            const response = await signIn({ username, password });
            navigate("../", { replace: true });
        } catch (error) {
            console.error({ error });
        }
    };

    return (
        <SignUpForm onSubmit={onSubmit} />
    );
};


export default SignUpContainer;
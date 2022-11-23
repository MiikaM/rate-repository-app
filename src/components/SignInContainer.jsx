import useSignIn from './hooks/useSignIn';
import { useNavigate } from 'react-router-native';
import SignInForm from './SignInForm';

const SignInContainer = () => {
    const [signIn] = useSignIn();
    let navigate = useNavigate();

    const onSubmit = async (values) => {
        const { username, password } = values;
        try {
            const { data } = await signIn({ username, password });
            console.log(`Congratulations you logged in as user with accesstoken: ${data.authenticate.accessToken}`);
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
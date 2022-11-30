import {  useNavigate } from 'react-router-native';
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
            const { data } = await signUp({ username, password });
            console.log(`Congratulations you have created an user with id: ${data.createUser.id}`);
            const response = await signIn({ username, password });
            console.log(`Congratulations you logged in as user with accesstoken: ${response.data.authenticate.accessToken}`);
            navigate("../", {replace: true});
        } catch (error) {
            console.error({ error });
        }
    };

    return (
        <SignUpForm onSubmit={onSubmit} />
    );
};


export default SignUpContainer;
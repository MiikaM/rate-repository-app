import { useApolloClient, useMutation } from '@apollo/client';
import { AUTHENTICATE } from '../graphql/mutations';
import useAuthStorage from './useAuthStorage';

const useSignIn = () => {
    const [authenticate, result] = useMutation(AUTHENTICATE);
    const apolloClient = useApolloClient();
    const authStorage = useAuthStorage();

    const signIn = async ({ username, password }) => {
        const response = await authenticate({ variables: { username, password } })
        await authStorage.setAccessToken(response.data.authenticate.accessToken);
        apolloClient.resetStore();
        return response
    }


    return [signIn, result];
};

export default useSignIn;
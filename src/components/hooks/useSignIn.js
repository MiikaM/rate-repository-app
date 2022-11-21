import { useMutation } from '@apollo/client';
import { AUTHENTICATE } from '../graphql/mutations';

const useSignIn = () => {
    const [authenticate, result] = useMutation(AUTHENTICATE);

    const signIn = async ({ username, password }) => {
        const response = await authenticate({ variables: { username, password } })
        console.log({response});
        
        return response
    }


    return [signIn, result];
};

export default useSignIn;
import { useApolloClient, useMutation } from '@apollo/client';
import { AUTHENTICATE } from '../graphql/mutations';
import useAuthStorage from './useAuthStorage';

const useCreateReview = () => {
    const [authenticate, result] = useMutation(AUTHENTICATE);


    const createReview = async ({ userId, repositoryId, rating, text }) => {
        const dateTime = new Date();

        const response = await authenticate({ variables: { userId, repositoryId, rating, text, createdAt: dateTime.toString() } })

        return response
    }


    return [createReview, result];
};

export default useCreateReview;
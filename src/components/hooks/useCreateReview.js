import {  useMutation } from '@apollo/client';
import { CREATE_REVIEW } from '../graphql/mutations';

const useCreateReview = () => {
    const [createReview, result] = useMutation(CREATE_REVIEW);


    const newReview = async ({ ownerName, repositoryName, rating, text }) => {
        const response = await createReview({ variables: { ownerName, repositoryName, rating, text} })
        return response
    }


    return [newReview, result];
};

export default useCreateReview;
import { useMutation } from "@apollo/client";
import { DELETE_REVIEW } from "../graphql/mutations"


const useDeleteReview = () => {
    const [deleteReview, result] = useMutation(DELETE_REVIEW);

    const removeReview = async (variables) => {
        const response = await deleteReview({ variables: variables })
        return response;
    }

    return [removeReview, result]
}

export default useDeleteReview;
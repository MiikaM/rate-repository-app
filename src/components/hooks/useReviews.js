import { useQuery } from '@apollo/client';
import { GET_REVIEWS } from '../graphql/queries';

const useReviews = ({id}) => {
    const { data, loading, error, refetch } = useQuery(GET_REVIEWS, {
        variables : {id: id},
        fetchPolicy: "cache-and-network"
    })

    console.log({ data, loading });


    return { reviews: data, reviewsLoading: loading, refetch, error };
};

export default useReviews;
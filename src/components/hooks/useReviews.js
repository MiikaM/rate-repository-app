import { useQuery } from '@apollo/client';
import { GET_REVIEWS } from '../graphql/queries';

const useReviews = (variables) => {
    const { data, loading, error, fetchMore, ...result } = useQuery(GET_REVIEWS, {
        variables: {
            id: variables.id,
            first: variables.first
        },
        fetchPolicy: "cache-and-network"
    })

    const handleFetchMore = () => {
        const canFetchMore = !loading && data.repository.reviews.pageInfo.hasNextPage;

        if (!canFetchMore) return;

        fetchMore({
            variables: {
                after: data.repository.reviews.pageInfo.endCursor,
                ...variables
            }
        })
    }

    return { reviews: data, reviewsLoading: loading, fetchMore: handleFetchMore, error, ...result };
};

export default useReviews;
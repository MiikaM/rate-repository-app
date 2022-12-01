import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (variables) => {
    const { data, loading, error, fetchMore, ...result } = useQuery(GET_REPOSITORIES, {
        variables: {
            first: variables.first,
            orderBy: variables.orderBy,
            orderDirection: variables.orderDirection,
            searchKeyword: variables.searchKeyword
        },
        fetchPolicy: "cache-and-network"
    })

    const handleFetchMore = () => {
        const canFetchMore = !loading && data.repositories.pageInfo.hasNextPage;     
        
        if (!canFetchMore) return;

        fetchMore({
            variables: {
                after: data.repositories.pageInfo.endCursor,
                ...variables
            }
        })
    }

    return { data, fetchMore: handleFetchMore, loading, error, ...result };
};

export default useRepositories;
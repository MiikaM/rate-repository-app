import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = ({ searchKeyword = "", orderBy = "CREATED_AT", orderDirection = "DESC" }) => {
    const { data, loading, error, refetch } = useQuery(GET_REPOSITORIES, {
        variables: { orderBy: orderBy, orderDirection: orderDirection, searchKeyword: searchKeyword },
        fetchPolicy: "cache-and-network"
    })

    return { data, loading, refetch, error };
};

export default useRepositories;
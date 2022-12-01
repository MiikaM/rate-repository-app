import { useQuery } from '@apollo/client';
import { GET_USER } from '../graphql/queries';

const useCheckUser = (variables) => {
    const { data, loading, error, refetch } = useQuery(GET_USER, {
        variables: variables,
        fetchPolicy: "cache-and-network"
    })

    return { data, loading, refetch, error };
};

export default useCheckUser;
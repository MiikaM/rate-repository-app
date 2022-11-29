import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
    const { data, loading, error, refetch } = useQuery(GET_REPOSITORIES, {
        fetchPolicy: "cache-and-network"
    })

    console.log({data, loading});
    

    return { data, loading, refetch, error };
};

export default useRepositories;
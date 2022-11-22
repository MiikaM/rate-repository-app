import { useQuery } from '@apollo/client';
import { GET_LOGGED_IN_USER } from '../graphql/queries';

const useCheckUser = () => {
    const { data, loading, error, refetch } = useQuery(GET_LOGGED_IN_USER, {
        fetchPolicy: "cache-and-network"
    })

    console.log({data});
    

    return { data, loading, refetch, error };
};

export default useCheckUser;
import { useQuery } from '@apollo/client';
import { GET_REPOSITORY } from '../graphql/queries';

const useRepository = ({ id }) => {
    const { loading, error, data } = useQuery(GET_REPOSITORY, {
        variables: { id: id },
        fetchPolicy: "cache-and-network"

    });


    return { data, loading, error };
};

export default useRepository;
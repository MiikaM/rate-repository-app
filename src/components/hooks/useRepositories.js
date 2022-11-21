import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
    //   const [repositories, setRepositories] = useState();
    //   const [loading, setLoading] = useState(false);

    const { data, loading, error, refetch } = useQuery(GET_REPOSITORIES, {
        fetchPolicy: "cache-and-network"
    })

    //   const fetchRepositories = async (signal) => {
    //     setLoading(true);

    //     // Replace the IP address part with your own IP address!
    //     const response = await fetch('http://192.168.1.164:5000/api/repositories', {signal: signal});
    //     const json = await response.json();

    //     setLoading(false);
    //     setRepositories(json);
    //   };

    //   useEffect(() => {
    //     const controller = new AbortController();
    //     const signal = controller.signal;

    //     fetchRepositories(signal);

    //     return () => controller.abort()
    //   }, [])


    return { data, loading, refetch, error };
};

export default useRepositories;
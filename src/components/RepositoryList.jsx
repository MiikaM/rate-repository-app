import { View } from 'react-native';
import useRepositories from './hooks/useRepositories';
import { RepositoryListContainer } from './RepositoryListContainer';

const RepositoryList = () => {
  const { data, loading } = useRepositories();


  return (<View>{loading ? null : <RepositoryListContainer repositories={data.repositories} />}</View>);
};

export default RepositoryList;
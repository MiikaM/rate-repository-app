import { FlatList, View, StyleSheet } from 'react-native';
import useRepositories from './hooks/useRepositories';
import RepositoryItem from './RepositoryItem';

const styles = StyleSheet.create({
  separator: {
    height: 5,
  },
  container: {
    backgroundColor: "#E1E5E8"
  }
});


const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {

  const { data } = useRepositories();
  
  const repositoryNodes = data ? data.repositories.edges.map(edge => edge.node) : [];

  return (
    <FlatList style={styles.container}
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={RepositoryItem}
    />
  );
};

export default RepositoryList;
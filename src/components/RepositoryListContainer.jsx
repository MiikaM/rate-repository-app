import { FlatList, StyleSheet, View } from "react-native";
import { useNavigate } from "react-router-native";
import RepositoryItem from "./RepositoryItem";
import SortRepositories from "./SortRepositories";

const styles = StyleSheet.create({
  separator: {
    height: 5,
  },
  container: {
    backgroundColor: "#E1E5E8"
  }
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories, setSort }) => {
  let navigate = useNavigate();

  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  const navigation = ({ id }) => {
    console.log(`Navigation id: ${id}`);

    navigate(`/repository/${id}`);
  }


  return (
    <FlatList style={styles.container}
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <RepositoryItem item={item} navigation={navigation} />}
      ListHeaderComponent={() => <SortRepositories setSort={setSort} />}
    />
  );
};
import { FlatList, StyleSheet, View } from "react-native";
import RepositoryItem from "./RepositoryItem";

const styles = StyleSheet.create({
    separator: {
      height: 5,
    },
    container: {
      backgroundColor: "#E1E5E8"
    }
  });

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories }) => {
    const repositoryNodes = repositories
      ? repositories.edges.map((edge) => edge.node)
      : [];
  
    return (
      <FlatList style={styles.container}
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={RepositoryItem}
      />
    );
  };
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
// import { useNavigate } from "react-router-native";
import RepositoryItem from "./RepositoryItem";
import SearchBar from "./SearchBar";
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

// export const RepositoryListContainer = ({ repositories, setSort, searchText, setSearchText, navigation }) => {
//   let navigate = useNavigate();

//   const repositoryNodes = repositories
//     ? repositories.edges.map((edge) => edge.node)
//     : [];

//   const navigation = ({ id }) => {
//     console.log(`Navigation id: ${id}`);

//     navigate(`/repository/${id}`);
//   }


//   return (

//   );
// };

export class RepositoryListContainer extends React.Component {
  renderHead = () => {
    const props = this.props;

    return (<View>
      <SearchBar search={props.search} searchText={props.searchText} />
      <SortRepositories setSort={props.setSort} />
    </View>)
  }



  render() {
    const repositoryNodes = this.props.repositories
      ? this.props.repositories.edges.map((edge) => edge.node)
      : [];

    return (
      <FlatList style={styles.container}
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => <RepositoryItem item={item} navigation={this.props.navigation} />}
        ListHeaderComponent={this.renderHead}
        onEndReached={this.props.onEndReach}
        onEndReachedThreshold={1}
      />)
  }
}
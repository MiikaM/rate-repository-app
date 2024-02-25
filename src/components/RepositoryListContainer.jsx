import React from "react";
import { FlatList, StyleSheet } from "react-native";
import ItemSeparator from "./ItemSeparator";
import RepositoryItem from "./RepositoryItem";
import RepositoryListHeader from "./RepositoryListHeader";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E1E5E8",
    height: "88%"
  }
});


export class RepositoryListContainer extends React.Component {
  renderHead = () => {
    const props = this.props;

    return (
      <RepositoryListHeader search={props.search} searchText={props.searchText} setSort={props.setSort} />)
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
        onEndReachedThreshold={0.5}
      />)
  }
}
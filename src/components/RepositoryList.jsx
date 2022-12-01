import { useState } from 'react';
import { View } from 'react-native';
import useRepositories from './hooks/useRepositories';
import { RepositoryListContainer } from './RepositoryListContainer';
import { useNavigate } from 'react-router-native';

const RepositoryList = () => {
  let navigate = useNavigate();
  const [sortOrder, setSortOrder] = useState("CREATED_AT");
  const [sortDirection, setSortDirection] = useState("DESC");
  const [searchKeyword, setSearchKeyword] = useState("");
  const { data, loading, fetchMore } = useRepositories({
    first: 8,
    orderBy: sortOrder,
    orderDirection: sortDirection,
    searchKeyword: searchKeyword
  });

  const updateSort = ({ sortOrder, sortDirection }) => {
    setSortOrder(sortOrder);
    setSortDirection(sortDirection);
  }
  const updateSearch = (query) => setSearchKeyword(query);

  const navigation = ({ id }) => {
    navigate(`/repository/${id}`);
  }

  const onEndReach = () => {
    fetchMore();
  }

  return (<View>{loading
    ? null
    : <RepositoryListContainer navigation={navigation} repositories={data?.repositories}
      search={updateSearch}
      setSort={updateSort}
      searchText={searchKeyword}
      onEndReach={onEndReach}
    />}</View>);
};

export default RepositoryList;
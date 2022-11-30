import { useState } from 'react';
import { View } from 'react-native';
import useRepositories from './hooks/useRepositories';
import { RepositoryListContainer } from './RepositoryListContainer';

const RepositoryList = () => {
  const [sortOrder, setSortOrder] = useState("CREATED_AT");
  const [sortDirection, setSortDirection] = useState("DESC");

  const { data, loading } = useRepositories({ orderBy: sortOrder, orderDirection: sortDirection });

  const updateSort = ({ sortOrder, sortDirection }) => {
    setSortOrder(sortOrder);
    setSortDirection(sortDirection);
  }

  return (<View>{loading ? null : <RepositoryListContainer repositories={data.repositories} setSort={updateSort} />}</View>);
};

export default RepositoryList;

import { useState } from "react";
import { View } from "react-native";
import SortRepositories from "./SortRepositories";
import { Searchbar } from 'react-native-paper';
import { useDebouncedCallback } from 'use-debounce';

const RepositoryListHeader = (props) => {
    const [searchQuery, setSearchQuery] = useState(props.searchText);

    const debounced = useDebouncedCallback(() => {
        props.search(searchQuery);
    }, 500)

    const onChangeSearch = query => {
        setSearchQuery(query)
        debounced();
    };

    return (<View>
        <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
        />
        <SortRepositories setSort={props.setSort} />
    </View>)
}

export default RepositoryListHeader;
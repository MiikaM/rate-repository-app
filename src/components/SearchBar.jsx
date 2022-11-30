import { useState } from 'react';
import { Searchbar } from 'react-native-paper';
import { useDebouncedCallback } from 'use-debounce';

const SearchBar = ({ search, searchText }) => {
    const [searchQuery, setSearchQuery] = useState(searchText);
    // const [debouncedValue] = useDebounce(searchQuery, 100);
    const onChangeSearch = query => {
        setSearchQuery(query)
        debounced();
    };

    const debounced = useDebouncedCallback(() => {
        search(searchQuery);
    }, 100)



    return (
        <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
        />)
}


export default SearchBar;
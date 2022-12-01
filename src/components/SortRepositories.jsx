import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Menu } from 'react-native-paper';
import Text from './Text';

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    item: {
        backgroundColor: 'red',
        color: 'white',
    }
});

const SortRepositories = ({ setSort }) => {
    const [title, setTitle] = useState("Latest repositories");
    const [visible, setVisible] = useState(false);

    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);

    const changeSort = (event, sort, title) => {
        event.preventDefault();
        setTitle(title);
        setSort({ sortOrder: sort[0], sortDirection: sort[1] })
        closeMenu();

    };

    return (
        <View style={styles.container}>
            <Text fontSize="subheading"> {title}</Text>
            <Menu visible={visible} onDismiss={closeMenu} anchor={<Button onPress={openMenu} icon="chevron-down"></Button>}>
                <Menu.Item
                    onPress={(event) =>
                        changeSort(event, ['CREATED_AT', 'DESC'], 'Latest repositories')
                    }
                    title="Latest repositories"
                />
                <Menu.Item
                    onPress={(event) =>
                        changeSort(
                            event,
                            ['RATING_AVERAGE', 'DESC'],
                            'Highest rated repositories'
                        )
                    }
                    title="Highest rated repositories"
                />
                <Menu.Item
                    onPress={(event) =>
                        changeSort(
                            event,
                            ['RATING_AVERAGE', 'ASC'],
                            'Lowest rated repositories'
                        )
                    }
                    title="Lowest rated repositories"
                />
            </Menu>
        </View>
    );
};

export default SortRepositories;

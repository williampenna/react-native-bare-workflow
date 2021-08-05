import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { ListItem, Avatar, Button, Icon } from 'react-native-elements';
import TouchableScale from 'react-native-touchable-scale'; // https://github.com/kohver/react-native-touchable-scale
import LinearGradient from 'react-native-linear-gradient';
import users from '../data/users';

export default props => {

    function getActions(user) {
        return (
            <ListItem.ButtonGroup

            />
            // <Button
            //     onPress={() => props.navigation.navigate('UserForm', { user })}
            //     type="clear"
            //     icon={<Icon name="edit" size={25} color="orange" />}
            // />
        )
    }

    function rightButtons(user) {
        return (
            <Button
                onPress={() => props.navigation.navigate('UserForm', { user })}
                type="clear"
                icon={<Icon name="edit" size={25} color="orange" />}
            />
        )
    }

    function getUserItem ({ item: user }) {
        return (
            <ListItem key={user.id} bottomDivider rightIcon={<Icon name="edit" size={25} color="orange" />}>
                <Avatar source={{uri: user.avatarUrl}} rounded/>
                <ListItem.Content>
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.ButtonGroup buttons={rightButtons(user)}/>
            </ListItem>
        )
    }

    return (
        <View style={{ flex:1 }}>
            <FlatList
                keyExtractor={user => user.id.toString()}
                data={users}
                renderItem={getUserItem}
            />
        </View>
    )
}

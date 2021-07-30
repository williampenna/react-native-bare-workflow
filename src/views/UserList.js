import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { ListItem, Avatar, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import users from '../data/users';

export default props => {

    function getUserItem ({ item: user }) {
        return (
            <ListItem key={user.id} bottomDivider>
                <Avatar source={{uri: user.avatarUrl}} rounded />
                <ListItem.Content>
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                </ListItem.Content>
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

import React from 'react';
import { Alert, FlatList, Text, View } from 'react-native';
import { ListItem, Avatar, Button, Icon } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import users from '../data/users';
import { color } from 'react-native-elements/dist/helpers';

export default props => {

    function confirmUserDeletion(user) {
        Alert.alert('Excluir usuário', 'Deseja excluir o usuário?', [
            {
                text: 'Sim',
                onPress: () => {
                    console.warn('Delete ' + user.id)
                }
            },
            {
                text: 'Não'
            }
        ]);
    }

    function deleteButton(user) {
        return (
            <Button
                icon={<Icon name="delete" size={25} color="red" />}
                type="clear"
                onPress={() => confirmUserDeletion(user)}
            />
        );
    }

    function editButton(user) {
        return (
            <Button
                icon={<Icon name="edit" size={25} color="orange" />}
                type="clear"
                onPress={() => props.navigation.navigate('UserForm', user)}
            />
        );
    }

    function rightButtons(user) {
        return [editButton(user), deleteButton(user)];
    }

    function getUserItem ({ item: user }) {
        return (
            <ListItem key={user.id} bottomDivider>
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

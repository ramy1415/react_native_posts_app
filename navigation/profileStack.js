import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator, Header } from '@react-navigation/stack';
import { NavigationContainer, useNavigation  } from '@react-navigation/native';
import profile from '../screens/profile';

const { Navigator : StackNavigator , Screen : StackScreen} = createStackNavigator();

const profileStack = () => {
    return (
        <StackNavigator
        screenOptions={
            {
                headerStyle:{
                    backgroundColor:'#9222FF',
                },
                headerTitleStyle:{
                    fontWeight:'bold',
                    color:'white'
                },
                headerTitleAlign:'center',
                
            }}
        >
            <StackScreen name='profile' component={profile} />
        </StackNavigator>
    )
}

export default profileStack

import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'expo-vector-icons/FontAwesome'
import { MaterialIcons } from '@expo/vector-icons'; 


import postStack from './postsStack';
import posts from '../screens/posts';
import profile from '../screens/profile';
import profileStack from './profileStack';
const {Navigator : TabNavigator,Screen :TabScreen} = createBottomTabNavigator();
const RootNavigatior = () => (
    <NavigationContainer>
        <TabNavigator tabBarOptions={
            {
            activeTintColor: '#FFF',
            style:{
                backgroundColor:'#9222FF',
            },
            labelStyle :{
                fontSize:20,
                fontWeight:'bold'
            }
            
        }
        }>
            <TabScreen name="Home" component={postStack} options={
                {
                    tabBarIcon:({focused,color})=> <FontAwesome name="home" size={24} color={color} />
                }
            } />
            <TabScreen name="Profile" component={profileStack} options={
                {
                    tabBarIcon:({focused,color})=> <MaterialIcons name="person" size={24} color={color} />
                }}/>
        </TabNavigator>
    </NavigationContainer>
)

export default RootNavigatior

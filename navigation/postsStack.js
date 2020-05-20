import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { createStackNavigator, Header } from '@react-navigation/stack';
import { NavigationContainer, useNavigation  } from '@react-navigation/native';
import home from '../screens/home'
import posts from '../screens/posts'
import Details from '../screens/details'
const { Navigator : StackNavigator , Screen : StackScreen} = createStackNavigator();
import FontAwesome from 'expo-vector-icons/FontAwesome'
const postStack = () => (
        <StackNavigator initialRouteName='Home' screenOptions={
            {
                headerStyle:{
                    backgroundColor:'#9222FF',
                },
                headerTitleStyle:{
                    fontWeight:'bold',
                    color:'white'
                },
                headerTitleAlign:'center',
                
            }
        }>
            <StackScreen name="Home" component={home}/>
            <StackScreen name="Posts" component={(posts)} 
            options={({navigation,route})=>(
                {
                headerLeft:()=>
                <TouchableOpacity
                onPress={()=>{
                    navigation.goBack()
                }}
                style={{flexDirection:'row', width:80 , justifyContent:'space-evenly'}}
                >
                <FontAwesome name="chevron-left" size={24} color="#fff" />
                <Text style={{fontWeight:'bold',fontSize:20 , color:'#fff'}}>Back</Text>
                </TouchableOpacity>
            })
                
            }
            />
            <StackScreen name="Details" component={(Details)} 
            options={({navigation,route})=>(
                {
                headerLeft:()=>
                <TouchableOpacity
                onPress={()=>{
                    navigation.goBack()
                }}
                style={{flexDirection:'row', width:80 , justifyContent:'space-evenly'}}
                >
                <FontAwesome name="chevron-left" size={24} color="#fff" />
                <Text style={{fontWeight:'bold',fontSize:20,color:'#fff'}}>Back</Text>
                </TouchableOpacity>
            })}
            />
        </StackNavigator>
    )


export default postStack

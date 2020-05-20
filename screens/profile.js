import React from 'react'
import {StyleSheet, View, Text } from 'react-native'

const profile = () => {
    return (
        <View style={{flexGrow:1}}>
            <View style={{flexGrow:.2}}>
            </View >
            <View >
                <Text style={[styles.myText,styles.myButton]}>Empty Page</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({images:{
    borderRadius:20,
    height:150,
    width:300,
  },myText:{
    fontWeight:'bold' ,marginTop:10 ,color:'#fff'
  },myButton:{
    backgroundColor:'#9222FF',
    width:150,
    alignSelf:'center',
    textAlign:'center',
    borderRadius:30,
    padding:10
  }
});
export default profile

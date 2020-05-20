import React from 'react'
import { StyleSheet,View, Text ,TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const home = () => {
    const navigation = useNavigation()
    return (
        <View style={{flexGrow:1}}>
            <View style={{flexGrow:.2}}>
            </View >
            <View >
                <TouchableOpacity onPress={()=>{
                    navigation.navigate('Posts')
                }}>
                    <Text style={[styles.myText,styles.myButton]}>get posts</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({myText:{
    fontWeight:'bold' ,marginTop:10 ,color:'#fff',fontSize:20
  },myButton:{
    backgroundColor:'#9222FF',
    width:150,
    alignSelf:'center',
    textAlign:'center',
    borderRadius:30,
    padding:10
  }
});
export default home

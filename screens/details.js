import React from 'react'
import { StyleSheet,View, Text, Image } from 'react-native'
import {  useRoute } from '@react-navigation/native'

const details = () => {
    const [Details, setDetails] = React.useState({})
    const route = useRoute()
    React.useEffect(() => {
        setDetails(route.params.details)
    }, [])
    return (
        <View style={{margin:10}}>
            <Image source={{uri:'https://picsum.photos/300?id='+Details.id}} style={styles.images} />
            <Text style={{fontWeight:'bold' , margin:10}}>Title : {Details.title}</Text>
            <Text style={{fontWeight:'bold' , margin:10}}>Body : {Details.body}</Text>
        </View>
    )
}

const styles = StyleSheet.create({images:{
    height:400,
    borderRadius:30
  }
});

export default details

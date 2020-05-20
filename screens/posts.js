import React from 'react'
import { StyleSheet , View, Text,FlatList,TouchableOpacity, Image, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const posts = () => {
    const [posts,setPosts]= React.useState([])
    const navigator = useNavigation()
    React.useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setPosts(json))
    },[])

    console.log(posts)
    return (
      <View style={{marginHorizontal:20}}>
              <FlatList
              data={posts}
              ListEmptyComponent={<Image source={require('../assets/loading.gif')} style={styles.images} />}
              renderItem={({item, index }) => (
                <View
                style={{ borderTopWidth:1 ,paddingVertical:20 ,borderColor:'#9222FF'}}
                key={item.id}
                >
                  <Image source={{uri:'https://picsum.photos/300?id='+item.id}} style={styles.images} />
                  <Text style={styles.myText}>Post Number : {item.id}</Text>
                  <Text style={styles.myText}>Title : {item.title}</Text>

                  <TouchableOpacity
                    onPress={()=>{
                      navigator.navigate('Details',{'details':item})
                    }}

                    ><Text style={[styles.myText,styles.myButton]}>View Post</Text>
                  </TouchableOpacity>
                </View>
                )}
              />
        </View>
    )
}

const styles = StyleSheet.create({images:{
      borderRadius:20,
      height:150,
      width:300,
      alignSelf:'center',
    },myText:{
      fontWeight:'bold' ,marginTop:10 
    },myButton:{
      backgroundColor:'#9222FF',
      width:150,
      alignSelf:'center',
      textAlign:'center',
      borderRadius:30,
      padding:10
    }
  });

export default posts

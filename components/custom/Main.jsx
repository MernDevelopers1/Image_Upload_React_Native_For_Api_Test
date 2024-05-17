import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useData } from './useContext/DataContext'
import { useNavigation } from 'expo-router'

const Main = () => {
    const navigation = useNavigation();
    const {Base64Image,setBase64Image} = useData();
    const postImage = async () => {
        const formdata = new FormData();
        formdata.append("image1",Base64Image);
        
    }
  return (
    <View style={styles.container}>
      {Base64Image && (
        <Image
          style={styles.preview}
          source={{ uri: `data:image/jpeg;base64,${Base64Image}` }}
        />
      )}
      <View style={styles.ButtonContainer}>

      <TouchableOpacity style={styles.buttonStyle} onPress={()=>navigation.navigate("Camera")}>
      <Text style={styles.buttonText}>Open Camera</Text>

      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonStyle} onPress={()=>navigation.navigate("Camera")}>
      <Text style={styles.buttonText}>Post</Text>

      </TouchableOpacity>
      <TouchableOpacity style={[styles.buttonStyle,{backgroundColor:!Base64Image?"lightblue":"skyblue"}]} disabled={Base64Image? false: true} onPress={()=>setBase64Image(null)}>
      <Text style={styles.buttonText}>Reset</Text>

      </TouchableOpacity>
      </View>
    </View>
  )
}

export default Main

const styles = StyleSheet.create({
    container:{
        width:"100%",
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    preview: {
        height:"50%",
        margin:20,
        borderRadius:20,
        alignSelf: 'stretch',
  },

  buttonStyle:{
    padding:10,
    backgroundColor:"skyblue",
    width:"30%",
    borderRadius:10,
    marginVertical:10,
    textAlign:"center"

  },
  ButtonContainer:{
    justifyContent:"center",
    alignItems:"center",
    flexDirection: "row",
    gap:10
  },
  buttonText:{
    textAlign:"center"
  }
})
import React,{useState, useEffect, useRef} from 'react'
import { StyleSheet,View, Text } from 'react-native'
import { Camera, CameraType } from 'expo-camera'

const Upload_image = () => {
    const [hasCamerPermission,setHasCameraPermission] = useState(null);
    const [image,setImage] = useState(null);
    const [type,setType] = useState(Camera.Constants.Type.front);
    // const [flash,setFlash] = useState(Camera.Constants.FlashMode.off);
    const cameraRef = useRef(null);

  //   useEffect(() => {
  //   (async () => {
  //     const { status } = await Camera.requestCameraPermissionsAsync();
  //     setHasCameraPermission(status === 'granted');
  //   })();
  // }, []);

  return (
    <View>
      <Text>Upload_image</Text>
    </View>
  )
}

export default Upload_image
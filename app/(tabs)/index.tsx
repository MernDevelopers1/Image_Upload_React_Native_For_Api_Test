import { Image, StyleSheet, Platform, View } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import App from '@/components/custom/Image';

export default function HomeScreen() {
  return (
    <View style={styles.mainContainer}>
      <App/>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    backgroundColor:"gray"
  }
});

import { Alert, StyleSheet, Text, View, Image } from 'react-native';
import { useState } from 'react';
import Button from './ui/Button';
import * as ImagePicker from 'expo-image-picker';

const GetPlayerImage = () => {
  const [playerImage, setPlayerImage] = useState(null);

  const handleTakePicture = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();

    if (status !== 'granted') {
      Alert.alert(
        'Camera Permission',
        'Permission to access the camera is required!',
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
        ]
      );
      return;
    }

    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [1, 1],
      cameraType: ImagePicker.CameraType.front,
      quality: 1,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });

    if (!result.canceled) {
      setPlayerImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      {playerImage && (
        <Image
          source={{ uri: playerImage }}
          style={styles.image}
        />
      )}
      <View style={styles.frame}></View>
      <Text style={styles.frameText}>Place your face here</Text>
      <Button onPress={handleTakePicture}>Capture</Button>
    </View>
  );
};

export default GetPlayerImage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginVertical: 20,
  },
  frame: {
    width: 250,
    height: 350,
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 175, // Half of the height to create an oval shape
    justifyContent: 'center',
    alignItems: 'center',
  },
  frameText: {},
});

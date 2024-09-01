import { StyleSheet, Text, View, Button, Pressable } from 'react-native';
import { useState } from 'react';
import { CameraView, useCameraPermissions } from 'expo-camera';

const GetPlayerImage = () => {
  const [facing, setFacing] = useState('front');
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          We need your permission to show the camera
        </Text>
        <Button
          onPress={requestPermission}
          title="grant permission"
        />
      </View>
    );
  }

//   const toggleCameraFacing = () => {
//     setFacing((current) => (current === 'back' ? 'front' : 'back'));
//   };

  return (
    <View style={styles.container}>
      <CameraView
        style={styles.camera}
        facing={facing}
      >
        <View style={styles.buttonContainer}>
          <Pressable
            style={styles.button}
            onPress={""}
          >
            <Text style={styles.text}>Capture</Text>
          </Pressable>
        </View>
      </CameraView>
    </View>
  );
};

export default GetPlayerImage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
    borderWidth: 2,
    paddingVertical: 10,
    borderRadius: 8,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});

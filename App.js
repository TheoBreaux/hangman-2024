import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import WelcomeScreen from './screens/WelcomeScreen';
import GameScreen from './screens/GameScreen';
import GetPlayerImage from './components/GetPlayerImage';

SplashScreen.preventAutoHideAsync();

const App = () => {
  const [loaded, error] = useFonts({
    BungeeSpice: require('./assets/fonts/BungeeSpice-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }


  

  return (
    <View style={styles.appContainer}>
      <StatusBar style="light" />
      {/* <WelcomeScreen /> */}
      <GetPlayerImage/>
      {/* <GameScreen /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: { flex: 1 },
});

export default App;

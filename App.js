import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import WelcomeScreen from './screens/WelcomeScreen';
import Container from './components/Container';

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
    <Container>
      <StatusBar style="light" />
      <WelcomeScreen />
    </Container>
  );
};

const styles = StyleSheet.create({});

export default App;

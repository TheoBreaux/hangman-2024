import { StyleSheet, Text, Image, View, Dimensions } from 'react-native';

import Button from '../components/ui/Button';

const WelcomeScreen = () => {
  const handleStartGame = () => {
    console.log('GAME STARTED!!');
  };

  return (
    <View style={styles.centerContent}>
      <Text style={styles.title}>Welcome to Hangman!</Text>
      <Image
        style={styles.image}
        source={require('../assets/images/hangman-image.png')}
      />
      <Button onPress={handleStartGame}>Start Game</Button>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0d6fea',
  },
  title: {
    fontFamily: 'BungeeSpice',
    fontSize: 25,
    textAlign: 'center',
    width: Dimensions.get('window').width,
  },
  image: {
    height: 300,
    width: 300,
    resizeMode: 'contain',
  },
});

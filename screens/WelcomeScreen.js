import { StyleSheet, Text, Image, View, Dimensions } from 'react-native';
import Container from '../components/Container';

const WelcomeScreen = () => {
  return (
    <Container>
      <View style={styles.centerContent}>
        <Text style={styles.title}>Hangman 2024 HOME</Text>
        {/* <Image
          style={styles.image}
          source={require('../assets/images/hangman-image.png')}
        /> */}
      </View>
    </Container>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#0d6fea', // Complementary blue color
  },
  title: {
    fontFamily: 'BungeeSpice',
    fontSize: 50,
    textAlign: 'center',
    width: Dimensions.get('window').width,
  },
  image: {
    height: 300,
    width: 300,
    resizeMode: 'contain',
  },
});

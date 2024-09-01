import { StyleSheet, Text, View, Pressable } from 'react-native';

const Button = ({ children, onPress }) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
    >
      <View>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 20,
    backgroundColor: '#e05356',
    borderColor: '#19183a',
    borderWidth: 2,
    elevation: 4,
  },
  pressed: { opacity: 0.7 },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
});

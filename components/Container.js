import { StyleSheet, View } from 'react-native';

const Container = ({ children, style, ...props }) => {
  return <View style={[styles.container, style]} {...props}>{children}</View>;
};

export default Container;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

import { StyleSheet, Dimensions } from 'react-native';
// screen sizing
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  title: {
    color: 'black',
    fontSize: 20,
    flex: 0.9,
    textDecorationStyle: 'solid',
    paddingLeft: 10,
    textAlign: 'center',
    margin: 20
  },
  titleRegisterScreen: {
    color: 'black',
    fontSize: 20,
    flex: 0.9,
    textDecorationStyle: 'solid',
    paddingLeft: 10,
    textAlign: 'center',
  },
  button: {
    textAlign: 'center',
    width: 250,
    alignSelf: 'center',
    bottom: -200,
    margin: 10,
    borderRadius: 20
  },
  buttonLogin: {
    borderRadius: 20,
    textAlign: 'center',
    width: 180,
    alignSelf: 'center',
    bottom: -100,
    margin: 10
  },
  buttonRegisterScreen: {
    textAlign: 'center',
    width: 250,
    alignSelf: 'center',
    bottom: -40,
    borderRadius: 20,
  },
  input: {
      borderRadius: 20,
      backgroundColor: '#B0D4F7',
      width: 220,
      height: 35,
      fontSize: 18,
      alignSelf: 'center',
      textAlign: 'center',
  },
  inputRegisterScreen: {
    borderRadius: 20,
    backgroundColor: '#B0D4F7',
    width: 220,
    height: 25,
    fontSize: 18,
    alignSelf: 'center',
    textAlign: 'center',
    marginBottom: 10
  },
});

export default styles;

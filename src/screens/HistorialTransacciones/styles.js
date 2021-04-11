import { StyleSheet, Dimensions } from 'react-native';
// screen sizing
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container:{
    flexDirection: 'column'

  },
  title: {
    color: 'black',
    fontSize: 20,
    flex: 0.9,
    textDecorationStyle: 'solid',
    paddingLeft: 10,
    marginTop: 15,
    marginLeft: 15
  },
  image: {
      width: 30,
      height: 35,
      flex: 0.1
  },
  row: {
    flex: 1,
    margin: 10
  },
  header:{
    margin: 10,
    flexDirection: 'row'
  },
  button: {
    textAlign: 'center',
    width: 250,
    alignSelf: 'center',
    bottom: -225,
    margin: 10,
    borderRadius: 20
  },
  item: {
      fontSize: 20
  },
  separator: {
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
    width: 390,
    marginLeft: 10
  },
});

export default styles;

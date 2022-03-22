import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 9,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 2,
    borderColor: 'red',
    margin: 10,
    marginLeft: 35,
    width: '80%',
    borderRadius: 20,
    height: 50,
  },
  btn: {
    width: '100%',
    marginVertical: 10,
    paddingVertical: 2,
  },
  textbtn: {
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 26,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default styles;

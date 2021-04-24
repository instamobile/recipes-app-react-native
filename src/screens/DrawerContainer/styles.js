import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 10
  },
  container: {
    flex: 0.5,
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    marginTop: 20
  },
  logout: {
    flex: 0.5,
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    bottom: -230
  },
  separator: {
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
    width: 200,
    marginLeft: 10
  },
  image: {
    flex: 0.2,
    width: 50,
    height: 50,
    left: 15,
    borderRadius: 100,
    marginRight: 10
  },
  name:{
    flex: 0.8,
    alignItems: 'center'
  }
});

export default styles;

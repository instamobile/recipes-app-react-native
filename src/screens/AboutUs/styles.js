import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  
    image1: {
      height: 100,
      width: 100,
      borderRadius: 50,
      position: 'absolute',
      marginLeft: 20,
      marginTop: 72
    },
  
    image2: {
      height: 100,
      width: 100,
      borderRadius: 50,
      alignSelf: 'center',
      marginTop: 30
    },
  
    image3: {
      height: 100,
      width: 100,
      borderRadius: 50,
      position: 'absolute',
      marginLeft: 280,
      marginTop: 72,
    },
  
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center",
  
  
    },
    text: {
      color: "white",
      flex: 1,
      textAlign: "left",
      // fontWeight:'bold',
      padding: 10,
      marginTop: 70,
      fontSize: 20,
      marginLeft: 10
    },
    header: {
      fontSize: 22,
      fontWeight: 'bold',
      color: 'white',
      textAlign:'center',
      textDecorationLine: 'underline',
      marginTop: 10,
      
  
    }
  })
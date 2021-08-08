import React,{Component} from "react";

import { ImageBackground, ScrollView, StyleSheet, Text, View, Image } from "react-native";

export default class AboutUs extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title'),
      headerTintColor: 'black',
      headerStyle: {
         backgroundColor: '#A882C1'
      },
    };
  };
  render(){
    return(
  <View style={styles.container}>

    <ImageBackground source={require('../../../assets/icons/aboutpage.png')} style={styles.image}>
      <ScrollView>
        <View style={{backgroundColor:'#0000006e'}}>
          <Text style={styles.header}>OUR TEAM</Text>
          <Image style={styles.image1}
            source={require('../../../assets/pre.png')} />
          <Image style={styles.image2}
            source={require('../../../assets/kau.png')} />
          <Image style={styles.image3}
            source={require('../../../assets/prath.png')} />
          <Text style={styles.text} >
            As there is a boom in the culinary industry in the past few months and there is an increased demand for new skills in the industry. Hence, we have decided to develop an App that guides the beginners to become a good chef.    {'\n'}    {'\n'}
        Our team consists of three developers namely Prerana Amirapu, Kaushik Kondu and Pratham Khubchandani .We have developed this app using React Native as it helps with a smooth UI and and can be easily used. {'\n'} {'\n'}
        It is a mobile app  that provides recipe recommendations personalized to the individual's tastes, semantic recipe search, a digital recipe box.It uses patent-pending technology, and a hand-curated knowledge graph to offer a semantic web search engine for food, cooking and recipes. It allows users to search by ingredient,cuisine and sources.  {'\n'} {'\n'}
        
        </Text>
        </View>
      </ScrollView>
    </ImageBackground>
  </View>
)}};


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

//we land in the HomeScreen as soon as we open the app ,where we can look at different cuisines,as we select the required cuisine it navigates us to Recipe Screen where we have a set of intructions on how to cook that particular dish.


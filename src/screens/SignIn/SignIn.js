import React, { useLayoutEffect } from "react";
import { Text, View,TouchableOpacity, TextInput } from "react-native";
import style from './styles'


export default function SingIn({ navigation }) {

  return (
    <View style={style.container}>
      <TextInput style={style.input} />
      <TextInput style={style.input} />

      <TouchableOpacity
        style={style.btn}
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <Text style={style.textbtn}>Press Here</Text>
      </TouchableOpacity>
    
    </View>
  );
}

import React from 'react';
import {
  ScrollView,
  Text,
  View,
  Image,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import styles from './styles';

export default class MiPerfil extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Mi Perfil'
    };
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { navigation } = this.props;
    return (
      <ScrollView style={styles.mainContainer}>
        <View>
            <Image style={styles.image} source={require('../../../assets/icons/selfie.jpeg')}/>
            <Text style={styles.title}>Nombre y apellido</Text>
            <TextInput style={styles.input}>Cristina Cañizales</TextInput>
            <Text style={styles.title}>Categoría</Text>
            <TextInput style={styles.input}>Diamante</TextInput>
            <Text style={styles.title}>Teléfono</Text>
            <TextInput style={styles.input}>1126704760</TextInput>
            <Text style={styles.title}>Email</Text>
            <TextInput style={styles.input}>ccanizales@uade.edu.ar</TextInput>
            <Text style={styles.title}>DNI</Text>
            <TextInput style={styles.input}>95.773.254</TextInput>
            <Image style={styles.editIcon} source={require('../../../assets/icons/edit.png')}></Image>
        </View>
      </ScrollView>
    );
  }
}

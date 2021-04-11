import React from 'react';
import { Button } from 'react-native-elements'
import {
  ScrollView,
  Text,
  View,
  Image,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import styles from './styles';

export default class Login extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Inicio de sesión'
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
            <Text style={styles.title}>Usuario</Text>
            <TextInput style={styles.input}></TextInput>
            <Text style={styles.title}>Contraseña</Text>
            <TextInput style={styles.input}></TextInput>
            <Button style={styles.button} title='Continuar como invitado'/>
            <Button style={styles.button} title='Registrarse'/>
        </View>
      </ScrollView>
    );
  }
}

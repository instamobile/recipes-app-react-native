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

export default class Registro extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Registro'
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
            <Text style={styles.title}>Nombre</Text>
            <TextInput style={styles.input}></TextInput>
            <Text style={styles.title}>Apellido</Text>
            <TextInput style={styles.input}></TextInput>
            <Text style={styles.title}>DNI</Text>
            <TextInput style={styles.input}></TextInput>
            <Text style={styles.title}>Email</Text>
            <TextInput style={styles.input}></TextInput>
            <Text style={styles.title}>Teléfono</Text>
            <TextInput style={styles.input}></TextInput>
            <Text style={styles.title}>Usuario</Text>
            <TextInput style={styles.input}></TextInput>
            <Text style={styles.title}>Contraseña</Text>
            <TextInput style={styles.input}></TextInput>
            <Button style={styles.button} title='Registrarse'/>
        </View>
      </ScrollView>
    );
  }
}

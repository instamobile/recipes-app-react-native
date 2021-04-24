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
      <ScrollView style={styles.mainContainer} scrollEnabled='false'>
        <View>
            <Text style={styles.titleRegisterScreen}>Nombre</Text>
            <TextInput style={styles.inputRegisterScreen}></TextInput>
            <Text style={styles.titleRegisterScreen}>Apellido</Text>
            <TextInput style={styles.inputRegisterScreen}></TextInput>
            <Text style={styles.titleRegisterScreen}>DNI</Text>
            <TextInput style={styles.inputRegisterScreen}></TextInput>
            <Text style={styles.titleRegisterScreen}>Email</Text>
            <TextInput style={styles.inputRegisterScreen}></TextInput>
            <Text style={styles.titleRegisterScreen}>Confirmar email</Text>
            <TextInput style={styles.inputRegisterScreen}></TextInput>
            <Text style={styles.titleRegisterScreen}>Teléfono</Text>
            <TextInput style={styles.inputRegisterScreen}></TextInput>
            <Text style={styles.titleRegisterScreen}>Usuario</Text>
            <TextInput style={styles.inputRegisterScreen}></TextInput>
            <Text style={styles.titleRegisterScreen}>Contraseña</Text>
            <TextInput style={styles.inputRegisterScreen}></TextInput>
            <Text style={styles.titleRegisterScreen}>Confirmar contraseña</Text>
            <TextInput style={styles.inputRegisterScreen}></TextInput>
            <Button 
                style={styles.buttonRegisterScreen} 
                title='Registrarse'
                onPress={() => {
                    navigation.navigate('Home');
                }}
            />
        </View>
      </ScrollView>
    );
  }
}

import React from 'react';
import {
  ScrollView,
  Text,
  View,
  Image,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


import styles from './styles';

export default class CargarNuevoProducto extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Cargar nuevo producto'
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
            
            <Text style={styles.title}>Nombre del producto</Text>
            <TextInput style={styles.input}></TextInput>

            <Text style={styles.title}>Categoria</Text>
            <TextInput style={styles.input}></TextInput>           
           
            <Text style={styles.title}>Imagen</Text>
            <Image source={{ uri: 'https://static.thenounproject.com/png/1156518-200.png', }}style={styles.image}/>

            <Text style={styles.title}>Precio base ($AR)</Text>
            <TextInput style={styles.input}> </TextInput>

            <Text style={styles.title}>Descripcion</Text>
            <TextInput style={styles.description}>Marca:  </TextInput>
            <TextInput style={styles.description}>Modelo:  </TextInput>
            <TextInput style={styles.description}>Estado:  </TextInput>
            <TextInput style={styles.description}>Otros:  </TextInput>



        </View>
      </ScrollView>
    );
  }
}




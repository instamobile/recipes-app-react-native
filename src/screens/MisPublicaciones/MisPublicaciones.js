import React from 'react';
import {
  ScrollView,
  Text,
  View,
  Image,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


import styles from './styles';

export default class MisPublicaciones extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Mis Publicaciones'
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
            
            <Text style={styles.title}> Para esta pantalla podriamos usar el componente de home y ponerle las imagenes 
            de los productos que subio este usuario. Para eso deberían estar 
            asociadas por backend al id del usuario y agregando el "estado" de la compra (activo/vendido) abajo de cada foto.</Text>


        </View>
      </ScrollView>
    );
  }
}



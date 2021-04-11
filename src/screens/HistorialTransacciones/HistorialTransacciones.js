import React from 'react';
import {
  ScrollView,
  Text,
  View,
  Image,
} from 'react-native';
import styles from './styles';

export default class HistorialTransacciones extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Historial de Transacciones'
    };
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { navigation } = this.props;
    const Separator = () => (
        <View style={styles.separator} />
      );
    return (
        <ScrollView style={styles.mainContainer}>
        <View style={styles.container}>
            <View style={styles.row}>
                <View style={styles.header}>
                    <Image style={styles.image} source={require('../../../assets/icons/expense.png')}/>
                    <Text style={styles.title}>Compras</Text>
                </View>
                <Separator />
                <Text style={styles.item}>Auto Toyota 2021 - $20.000</Text>
            </View>    
            <View style={styles.row}>
                <View style={styles.header}>
                    <Image style={styles.image} source={require('../../../assets/icons/wallet.png')}/>
                    <Text style={styles.title}>Ventas</Text>
                </View>
                <Separator />
                <Text style={styles.item}>Cuadro Claude Monet - $50.000</Text>
            </View>
        </View>
      </ScrollView>
    );
  }
}

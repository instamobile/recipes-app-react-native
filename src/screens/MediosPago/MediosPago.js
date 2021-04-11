import React from 'react';
import { Button } from 'react-native-elements'
import {
  ScrollView,
  Text,
  View,
  Image
} from 'react-native';
import styles from './styles';
import { tarjetas, cuentas } from '../../data/dataArrays';

export default class MediosPago extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Medios de Pago'
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
        <View>
            <View style={styles.header}>
                <Image style={styles.image} source={require('../../../assets/icons/credit-card.png')}/>
                <Text style={styles.title}>Tarjetas</Text>
            </View>
            <Separator />
            <Text style={styles.cards}>{tarjetas[0].name}       ****{tarjetas[0].number.substr(-4,4)}</Text>
            <Text style={styles.cards}>{tarjetas[1].name}       ****{tarjetas[1].number.substr(-4,4)}</Text>
            <Text style={styles.cards}>{tarjetas[2].name}       ****{tarjetas[2].number.substr(-4,4)}</Text>
            {/* {tarjetas.map(item => {
                <Text style={styles.title}>{item.name}****{item.number.substr(-4,4)}</Text>
            })} */}
            
            <View style={styles.header}>
                <Image style={styles.image} source={require('../../../assets/icons/bank.png')}/>
            <Text style={styles.title}>Cuentas bancarias</Text>
            </View>
            <Separator />
            <Text style={styles.cards}>{cuentas[0].name}        ****{cuentas[0].number.substr(-4,4)}</Text>
            <Text style={styles.cards}>{cuentas[1].name}        ****{cuentas[1].number.substr(-4,4)}</Text>
            <Text style={styles.cards}>{cuentas[2].name}        ****{cuentas[2].number.substr(-4,4)}</Text>
            <Button style={styles.button} title='Nuevo' type='solid' />
        </View>
      </ScrollView>
    );
  }
}

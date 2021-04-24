import React, { useState } from 'react';
import { Button } from 'react-native-elements';
// import { Overlay } from 'react-native-modal-overlay';
import {
  ScrollView,
  Text,
  View,
  Image,
  Modal,
  TextInput
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
  state = {
    modalVisible: false,
    // overlayVisible: false
  };

  openModal = () => this.setState({ modalVisible: true });
  closeModal = () => this.setState({ modalVisible: false });
  // openOverlay = () => this.setState({overlayVisible: true});
  // closeOverlay = () => this.setState({overlayVisible: false});
  render() {
    const { navigation } = this.props;
    const { modalVisible, overlayVisible } = this.state;
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
            <View style={styles.header}>
                <Image style={styles.image} source={require('../../../assets/icons/bank.png')}/>
            <Text style={styles.title}>Cuentas bancarias</Text>
            </View>
            <Separator />
            <Text style={styles.cards}>{cuentas[0].name}        ****{cuentas[0].number.substr(-4,4)}</Text>
            <Text style={styles.cards}>{cuentas[1].name}        ****{cuentas[1].number.substr(-4,4)}</Text>
            <Text style={styles.cards}>{cuentas[2].name}        ****{cuentas[2].number.substr(-4,4)}</Text>
            <View style={styles.buttonArea}>
              <Modal
                animationType='fade'
                transparent={false}
                presentationStyle='formSheet'
                visible={modalVisible}
                onRequestClose={() => {
                  Alert.alert("Modal has been closed.");
                  this.closeModal;
                }}
              >
                <View>
                  <Text style={styles.modalTitle}>Nuevo medio de pago</Text>
                  <View style={styles.modal}>
                    <View style={styles.column}>
                      <Text style={styles.modalLabel}>Tipo:</Text>
                      <Text style={styles.modalLabel}>Nombre:</Text>
                      <Text style={styles.modalLabel}>Número:</Text>
                      <Text style={styles.modalLabel}>Vencimiento:</Text>
                      <Text style={styles.modalLabel}>CVV:</Text>
                    </View>
                    <View style={styles.column}>
                      <TextInput style={styles.modalInput}></TextInput>
                      <TextInput style={styles.modalInput}></TextInput>
                      <TextInput style={styles.modalInput}></TextInput>
                      <TextInput style={styles.modalInput}></TextInput>
                      <TextInput style={styles.modalInput}></TextInput>                    
                    </View>
                  </View>
                  <View style={styles.columns}>
                    <Button style={styles.modalButton} title='Agregar' type='solid' onPress={this.closeModal}/>
                    <Button style={styles.modalButton} title='Cerrar' type='solid' onPress={this.closeModal}/>
                  </View>
                </View>
              </Modal>
              <Button style={styles.button} title='Nuevo' type='solid' onPress={this.openModal}/>
              {/* <Overlay visible={overlayVisible} onClose={this.closeOverlay} closeOnTouchOutside>
                <Text>Hello from Overlay!</Text>
              </Overlay> */}
              <Modal
                animationType='fade'
                transparent={false}
                presentationStyle='formSheet'
                visible={modalVisible}
                onRequestClose={() => {
                  Alert.alert("Modal has been closed.");
                  this.closeModal;
                }}
              >
                <View>
                  <Text style={styles.modalTitle}>Editar medio de pago</Text>
                  <View style={styles.modal}>
                    <View style={styles.column}>
                      <Text style={styles.modalLabel}>Tipo:</Text>
                      <Text style={styles.modalLabel}>Nombre:</Text>
                      <Text style={styles.modalLabel}>Número:</Text>
                      <Text style={styles.modalLabel}>Vencimiento:</Text>
                      <Text style={styles.modalLabel}>CVV:</Text>
                    </View>
                    <View style={styles.column}>
                      <TextInput style={styles.modalInput}></TextInput>
                      <TextInput style={styles.modalInput}></TextInput>
                      <TextInput style={styles.modalInput}></TextInput>
                      <TextInput style={styles.modalInput}></TextInput>
                      <TextInput style={styles.modalInput}></TextInput>                    
                    </View>
                  </View>
                  <View style={styles.columns}>
                    <Button style={styles.modalButton} title='Agregar' type='solid' onPress={this.closeModal}/>
                    <Button style={styles.modalButton} title='Cerrar' type='solid' onPress={this.closeModal}/>
                  </View>
                </View>
              </Modal>
              <Button style={styles.button} title='Editar' type='solid' onPress={this.openModal}/>
              <Button style={styles.button} title='Borrar' type='solid' />
            </View>
        </View>
      </ScrollView>
    );
  }
}

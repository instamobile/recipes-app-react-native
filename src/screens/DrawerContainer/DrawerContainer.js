import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import MenuButton from '../../components/MenuButton/MenuButton';


export default class DrawerContainer extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.content}>
        <View style={styles.container}>
          <MenuButton
            title="Inicio"
            source={require('../../../assets/icons/home.png')}
            onPress={() => {
              navigation.navigate('Home');
              navigation.closeDrawer();
            }}
          />
          <MenuButton
            title="Mi perfil"
            source={require('../../../assets/icons/category.png')}
            onPress={() => {
              navigation.navigate('MiPerfil');
              navigation.closeDrawer();
            }}
          />

          <MenuButton
            title="Mis subastas activas (??)"
            source={require('../../../assets/icons/category.png')}
            onPress={() => {
              navigation.navigate('Categories');
              navigation.closeDrawer();
            }}
          />
          <MenuButton
            title="Mis publicaciones"
            source={require('../../../assets/icons/category.png')}
            onPress={() => {
              navigation.navigate('MisPublicaciones');
              navigation.closeDrawer();
            }}
          />
          <MenuButton
            title="Cargar nuevo producto"
            source={require('../../../assets/icons/category.png')}
            onPress={() => {
              navigation.navigate('CargarNuevoProducto');
              navigation.closeDrawer();
            }}
          />
          <MenuButton
            title="Historial transacciones"
            source={require('../../../assets/icons/category.png')}
            onPress={() => {
              navigation.navigate('HistorialTransacciones');
              navigation.closeDrawer();
            }}
          />
          <MenuButton
            title="Medios de pago"
            source={require('../../../assets/icons/category.png')}
            onPress={() => {
              navigation.navigate('MediosPago');
              navigation.closeDrawer();
            }}
          />





          {/*Solo para ver qué tal */}
          <MenuButton
            title="Login"
            source={require('../../../assets/icons/info.png')}
            onPress={() => {
              navigation.navigate('Login');
              navigation.closeDrawer();
            }}
          />


          <MenuButton
            title="Cerrar Sesión"
            source={require('../../../assets/icons/info.png')}
            onPress={() => {
              navigation.navigate('CerrarSesion');
              navigation.closeDrawer();
            }}
          />


          
        </View>
      </View>
    );
  }
}

DrawerContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  })
};


/*

          <MenuButton
            title="Mis favoritos (categorias)"
            source={require('../../../assets/icons/category.png')}
            onPress={() => {
              navigation.navigate('Categories');
              navigation.closeDrawer();
            }}
          />

          <MenuButton
            title="SEARCH (por las dudas)"
            source={require('../../../assets/icons/search.png')}
            onPress={() => {
              navigation.navigate('Search');
              navigation.closeDrawer();
            }}
          />
*/
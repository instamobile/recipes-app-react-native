import React from 'react';
import { TouchableHighlight, Image, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class ViewIngredientsButton extends React.Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <View style={styles.container}>
          <Text style={styles.text}>View Ingredients</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

ViewIngredientsButton.propTypes = {
  onPress: PropTypes.func,
  source: PropTypes.number,
  title: PropTypes.string
};

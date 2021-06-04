import React from 'react';
import { TouchableHighlight, Image, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class VideoButton extends React.Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <View style={styles.container}>
          <Text style={styles.text}>  Click Here For Videos </Text>
        </View>
      </TouchableOpacity>
    );
  }
}


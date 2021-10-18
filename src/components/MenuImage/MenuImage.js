import React from "react";
import { TouchableOpacity, Image } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";

export default function MenuImage(props) {
  return (
    <TouchableOpacity style={styles.headerButtonContainer} onPress={props.onPress}>
      <Image style={styles.headerButtonImage} source={require("../../../assets/icons/menu.png")} />
    </TouchableOpacity>
  );
}

MenuImage.propTypes = {
  onPress: PropTypes.func,
};

// BackButton/styles.js
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  btnContainer: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20, 
    padding: 10, 
    margin: 8, 
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
  btnIcon: {
    height: 20, 
    width: 20,
  },
});

export default styles;
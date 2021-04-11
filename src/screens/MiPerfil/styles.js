import { StyleSheet, Dimensions } from 'react-native';
// screen sizing
const { width, height } = Dimensions.get('window');
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height;

const numColumns = 1;
// item size
const RECIPE_ITEM_HEIGHT = 100;
const RECIPE_ITEM_OFFSET = 10;
const RECIPE_ITEM_MARGIN = RECIPE_ITEM_OFFSET * 2;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: RECIPE_ITEM_OFFSET,
    marginTop: 30,
    width: (SCREEN_WIDTH - RECIPE_ITEM_MARGIN) / numColumns - RECIPE_ITEM_OFFSET,
    height: RECIPE_ITEM_HEIGHT + 60,
    backgroundColor: '#E7F3FF'
  },
  title: {
    margin: 10,
    padding: 5,
    color: 'black',
    fontSize: 20,
    textAlign: 'center'
  },
  image: {
      width: 200,
      height: 200,
      alignSelf: 'center',
      borderRadius: 100
  },
  input: {
      borderRadius: 20,
      backgroundColor: '#E7F3FF',
      width: 220,
      fontSize: 18,
      alignSelf: 'center',
      textAlign: 'center',
  },
  editIcon: {
    marginTop: 10,
    width: 40,
    height: 40,
    alignSelf: 'center'
  }
});

export default styles;

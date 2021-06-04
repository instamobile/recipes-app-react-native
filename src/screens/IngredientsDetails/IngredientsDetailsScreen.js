import React from 'react';
import {
  FlatList,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';
import styles from './styles';
import {
  getIngredientName,
  getAllIngredients,
} from '../../data/MockDataAPI';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class IngredientsDetailsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title'),
      headerTintColor: 'black',
      headerStyle: {
         backgroundColor: '#A882C1'
      },
      headerTitleStyle: {
        fontSize: 16
      }
    };
  };

  constructor(props) {
    super(props);
  }

  onPressIngredient = item => {
    let name = getIngredientName(item.ingredientId);
    let ingredient = item.ingredientId;
    this.props.navigation.navigate('Ingredient', { ingredient, name });
  };

  renderIngredient = ({ item }) => (
    <TouchableOpacity onPress={() => this.onPressIngredient(item[0])}>
      <View style={styles.container}>
        <Image style={styles.photo} source={{ uri: item[0].photo_url }} />
        <Text style={styles.title}>{item[0].name}</Text>
        <Text style={{ color: 'grey' }}>{item[1]}</Text>
      </View>
    </TouchableOpacity>
  );

  render() {
    const { navigation } = this.props;
    const item = navigation.getParam('ingredients');
    const ingredientsArray = getAllIngredients(item);

    return (
      <View >
        <FlatList 
          vertical
          showsVerticalScrollIndicator={false}
          numColumns={3}
          data={ingredientsArray}
          renderItem={this.renderIngredient}
          keyExtractor={item => `${item.recipeId}`}
        />
      </View>
    );
  }
}

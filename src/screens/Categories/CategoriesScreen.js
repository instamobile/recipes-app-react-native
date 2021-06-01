import React from 'react';
import {
  FlatList,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';
import styles from './styles';
import { categories } from '../../data/dataArrays';
import MenuImage from '../../components/MenuImage/MenuImage';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default class CategoriesScreen extends React.Component {
  static navigationOptions  = ({ navigation }) => ({
    title: 'Home',
    headerLeft: () => <MenuImage
    onPress={() => {
      navigation.openDrawer();
    }}
  />
  });

  constructor(props) {
    super(props);
  }

  onPressCategory = item => {
    const title = item.name;
    const category = item;
    this.props.navigation.navigate('RecipesList', { category, title });
  };

  renderCategory = ({ item }) => (
    <TouchableOpacity onPress={() => this.onPressCategory(item)}>
      <View style={styles.categoriesItemContainer}>
        <Image style={styles.categoriesPhoto} source={{ uri: item.photo_url }} />
        <Text style={styles.categoriesName}>{item.name}</Text> 
      </View>
    </TouchableOpacity>
  );

  render() {
    return (
      <View style={styles.view}>
        <FlatList
        numColumns={2}
          data={categories}
          renderItem={this.renderCategory}
          keyExtractor={item => `${item.id}`}
        />
      </View>
    );
  }
}

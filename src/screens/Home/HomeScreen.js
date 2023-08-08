import React, { useState, useLayoutEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  FlatList,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  TextInput,
  Button,
} from 'react-native';
import styles from './styles';
import { recipes } from '../../data/dataArrays';
import MenuImage from '../../components/MenuImage/MenuImage';
import { getCategoryName } from '../../data/MockDataAPI';

export default function HomeScreen(props) {
  const { navigation } = props;
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);
  const [favorites, setFavorites] = useState([]);
  const [isGridView, setIsGridView] = useState(true);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <MenuImage
          onPress={() => {
            navigation.openDrawer();
          }}
        />
      ),
      headerRight: () => <View />,
    });
  }, []);

  const handleSearch = (text) => {
    setSearchQuery(text);
    const newFilteredRecipes = recipes.filter((item) =>
      item.title.toLowerCase().includes(text.toLowerCase()),
    );
    setFilteredRecipes(newFilteredRecipes);
  };

  const toggleFavorite = (recipeId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(recipeId)
        ? prevFavorites.filter((id) => id !== recipeId)
        : [...prevFavorites, recipeId],
    );
  };

  const onPressRecipe = (item) => {
    navigation.navigate('Recipe', { item });
  };

  const renderRecipes = ({ item }) => (
    <TouchableHighlight
      underlayColor="rgba(73,182,77,0.9)"
      onPress={() => onPressRecipe(item)}
    >
      <View style={isGridView ? styles.container : styles.listViewContainer}>
        <Image
          style={isGridView ? styles.photo : styles.listPhoto}
          source={{ uri: item.photo_url }}
        />
        <View style={{ flex: 1 }}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.category}>
            {getCategoryName(item.categoryId)}
          </Text>
        </View>
        <TouchableHighlight onPress={() => toggleFavorite(item.recipeId)}>
          <View style={styles.favoriteContainer}>
            <Icon
              name={favorites.includes(item.recipeId) ? 'heart' : 'heart-o'}
              size={24}
              color="#ff0000"
            />
            <Text style={styles.favorite}>{item.favoriteCount}</Text>
          </View>
        </TouchableHighlight>
      </View>
    </TouchableHighlight>
  );

  return (
    <View>
      <TextInput
        value={searchQuery}
        placeholder="Look for a recipe..."
        onChangeText={handleSearch}
        style={styles.inputContainer}
      />
      <TouchableOpacity
        style={styles.switchViewButton}
        onPress={() => setIsGridView(!isGridView)}
      >
        <Text style={styles.switchViewButtonText}>
          {isGridView ? 'List Mode' : 'Grid Mode'}
        </Text>
      </TouchableOpacity>
      <FlatList
        vertical
        showsVerticalScrollIndicator={false}
        numColumns={isGridView ? 2 : 1}
        data={filteredRecipes}
        renderItem={renderRecipes}
        keyExtractor={(item) => `${item.recipeId}`}
        key={isGridView ? 'GRID' : 'LIST'}
      />
    </View>
  );
}

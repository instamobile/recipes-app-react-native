import { StyleSheet } from 'react-native';
import { RecipeCard } from '../../AppStyles';

const styles = StyleSheet.create({
  container: {
    ...RecipeCard.container,
    margin: 10,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  listViewContainer: {
    flexDirection: 'row',
    margin: 10,
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  photo: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  listPhoto: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
  title: {
    textAlign: 'center',
    fontSize: 14,
    flexWrap: 'wrap',
  },
  category: {
    ...RecipeCard.category,
    textAlign: 'center',
  },
  favoriteContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 2,
  },
  inputContainer: {
    padding: 10,
    backgroundColor: '#f1f1f1',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
  },
  switchViewButton: {
    padding: 10,
    backgroundColor: 'transparent',
    borderRadius: 5,
    margin: 5,
    borderWidth: 2,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  switchViewButtonPressed: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  switchViewButtonText: {
    color: '#000',
    fontSize: 16,
  },
});

export default styles;

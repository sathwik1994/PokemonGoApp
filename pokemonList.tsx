import React, { useEffect, useState } from 'react';
import { View, FlatList, Image, Text, Button, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAndSetPokemonList } from './actions/pokemonListAction';
import Pokemon from './types/Pokemon';

interface PokemonListProps {
  addToCart: (pokemon: Pokemon) => void;
  onSelectPokemon: (pokemon: Pokemon) => void;
}

const PokemonList: React.FC<PokemonListProps> = ({ addToCart, onSelectPokemon }) => {
  const dispatch = useDispatch();
  const pokemonList = useSelector(state => state.pokemonReducer);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchInitialPokemon();
  }, []);

  const fetchInitialPokemon = () => {
    setLoading(true);
    dispatch(fetchAndSetPokemonList(20)) // Fetch initial 20 items
      .then(() => setLoading(false))
      .catch(() => setLoading(false));
  };

  const fetchMorePokemon = () => {
    setLoading(true);
    // Fetch next set of items based on current count
    dispatch(fetchAndSetPokemonList(pokemonList.length + 20))
      .then(() => setLoading(false))
      .catch(() => setLoading(false));
  };

  const renderPokemonItem = ({ item }: { item: Pokemon }) => (
    <TouchableOpacity onPress={() => onSelectPokemon(item)}>
      <View style={styles.item}>
        <Image source={{ uri: item.icon }} style={styles.icon} />
        <Text style={styles.name}>{item.name}</Text>
        <Button title="Add to Cart" onPress={() => addToCart(item)} />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={pokemonList}
        renderItem={renderPokemonItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.list}
        onEndReached={fetchMorePokemon} // Fetch more items when reaching end
        onEndReachedThreshold={0.5} // Trigger when reaching half of the list
      />
      {loading && <ActivityIndicator style={styles.loadingIndicator} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    color: 'blue'
  },
  list: {
    alignItems: 'center',
  },
  item: {
    alignItems: 'center',
    margin: 10,
  },
  icon: {
    width: 100,
    height: 100,
  },
  name: {
    marginTop: 5,
    fontSize: 16,
    color: 'black'
  },
  loadingIndicator: {
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
  },
});

export default PokemonList;

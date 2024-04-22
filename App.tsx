import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import PokemonList from './pokemonList';
import Cart from './Cart';
import PokemonDetails from './pokemanDetails';
import { useDispatch, useSelector } from 'react-redux';
import { cartView, addToCart, removeFromCart, increaseQuantity, decreaseQuantity } from './actions/cartActions';
import { clearSelectedPokemon, setSelectedPokemon } from './actions/selectedPokemonActions';
import { clearPokemonDetails, setPokemonDetails } from './actions/pokemonDetailsActions';
import Pokemon from './types/Pokemon';

function App(): React.JSX.Element {
  const dispatch = useDispatch();
  const cartVisible = useSelector(state => state.cartReducers.cartVisible);
  const cartItems = useSelector(state => state.cartItemsReducer);
  const selectedPokemon = useSelector(state => state.selectedPokemonReducer);
  const pokemonDetails = useSelector(state => state.pokemonDetailsReducer);

  const onSelectPokemon = (pokemon: Pokemon) => {
    dispatch(setSelectedPokemon(pokemon));
    dispatch(setPokemonDetails(pokemon));
  };

  const onCloseModal = () => {
    dispatch(clearSelectedPokemon());
    dispatch(clearPokemonDetails());
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Pokémon Shop</Text>
        <Button title={cartVisible ? 'Hide Cart' : 'Show Cart'} onPress={() => dispatch(cartView())} />
      </View>
      <View style={styles.content}>
        <PokemonList addToCart={(pokemon: Pokemon) => dispatch(addToCart(pokemon))} onSelectPokemon={onSelectPokemon} />
        {cartVisible &&
          <Cart
            cartItems={cartItems.map((item) => ({
              ...item,
              onSelectPokemon: () => onSelectPokemon(item.pokemon),
              image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.pokemon.id}.png`,
              onIncrease: () => dispatch(increaseQuantity(item.pokemon.id)), // Dispatch action to increase quantity
              onDecrease: () => dispatch(decreaseQuantity(item.pokemon.id)), // Dispatch action to decrease quantity
              onRemove: () => dispatch(removeFromCart(item.pokemon.id)), // Dispatch action to remove from cart
            }))}
          />
        }
      </View>
      <PokemonDetails pokemon={selectedPokemon} pokemonDetails={pokemonDetails} onClose={onCloseModal} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black'
  },
  content: {
    flex: 1,
  },
});

export default App;

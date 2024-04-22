import { Dispatch } from 'redux';
import Pokemon from '../types/Pokemon';

export const setPokemonList = (pokemonList: Pokemon[]) => {
  return {
    type: 'SET_POKEMON_LIST',
    payload: pokemonList,
  };
};

export const fetchAndSetPokemonList = (limit: number) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
      const data = await response.json();
      const results: { name: string; url: string }[] = data.results;

      const fetchedPokemon: Pokemon[] = await Promise.all(
        results.map(async (pokemon, index) => {
          const response = await fetch(pokemon.url);
          const pokemonData = await response.json();
          return {
            name: pokemonData.name,
            id: index + 1,
            icon: pokemonData.sprites.front_default,
            weight: pokemonData.weight
          };
        })
      );

      dispatch(setPokemonList(fetchedPokemon));
    } catch (error) {
      console.error('Error fetching and setting Pokemon list:', error);
    }
  };
};


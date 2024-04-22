import { Dispatch } from 'redux';
import Pokemon from '../types/Pokemon';

export const SET_POKEMON_DETAILS = 'SET_POKEMON_DETAILS';
export const CLEAR_POKEMON_DETAILS = 'CLEAR_POKEMON_DETAILS';

export const setPokemonDetails = (pokemon: Pokemon) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.id}`);
      const data = await response.json();
      dispatch({
        type: SET_POKEMON_DETAILS,
        payload: data,
      });
    } catch (error) {
      console.error('Error fetching Pokemon details:', error);
    }
  };
};

export const clearPokemonDetails = () => ({
  type: CLEAR_POKEMON_DETAILS,
});

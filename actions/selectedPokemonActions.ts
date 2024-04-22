import Pokemon from '../types/Pokemon';

export const setSelectedPokemon = (pokemon: Pokemon | null) => {
  return {
    type: 'SET_SELECTED_POKEMON',
    payload: pokemon,
  };
};

export const clearSelectedPokemon = () => {
  return {
    type: 'CLEAR_SELECTED_POKEMON',
  };
};

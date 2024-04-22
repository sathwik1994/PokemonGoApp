import Pokemon from '../types/Pokemon';

const initialState: Pokemon | null = null;

export const selectedPokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SELECTED_POKEMON':
      return action.payload;
    case 'CLEAR_SELECTED_POKEMON':
      return null;
    default:
      return state;
  }
};

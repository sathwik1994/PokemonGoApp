import { SET_POKEMON_DETAILS, CLEAR_POKEMON_DETAILS } from '../actions/pokemonDetailsActions';

const initialState = null;

const pokemonDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMON_DETAILS:
      return action.payload;
    case CLEAR_POKEMON_DETAILS:
      return null;
    default:
      return state;
  }
};

export default pokemonDetailsReducer;

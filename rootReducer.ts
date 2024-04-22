import { combineReducers } from 'redux';
import cartItemsReducer from './reducers/cartItemsReducer';
import cartReducers from './reducers/cartReducers';
import pokemonDetailsReducer from './reducers/pokemonDetailsReducer';
import pokemonReducer from './reducers/pokemonReducer';
import { selectedPokemonReducer } from './reducers/selectedPokemonReducer';

const rootReducer = combineReducers({
  cartReducers: cartReducers,
  pokemonReducer: pokemonReducer,
  selectedPokemonReducer: selectedPokemonReducer,
  pokemonDetailsReducer: pokemonDetailsReducer,
  cartItemsReducer: cartItemsReducer
});

export default rootReducer;

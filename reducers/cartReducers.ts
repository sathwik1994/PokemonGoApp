const initialState = {
  cartVisible: false
};

export const cartReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'CART_VISIBILITY':
      return {
        ...state,
        cartVisible: !state.cartVisible
      };
    default:
      return state; // Return the current state for any unknown actions
  }
};

export default cartReducers;

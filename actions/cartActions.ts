import Pokemon from '../types/Pokemon';

export const CLEAR_CART = 'CLEAR_CART';

export const cartView = () => {
    return {
        type: 'CART_VISIBILITY'
    }
}

export const addToCart = (pokemon: Pokemon) => ({
    type: 'ADD_TO_CART',
    payload: pokemon,
});

export const removeFromCart = (id: number) => ({
    type: 'REMOVE_FROM_CART',
    payload: id,
});

export const increaseQuantity = (id: number) => ({
    type: 'INCREASE_QUANTITY',
    payload: id,
});

export const decreaseQuantity = (id: number) => ({
    type: 'DECREASE_QUANTITY',
    payload: id,
});

// actions/cartActions.ts

export const placeOrder = () => {
    // const dispatch = useDispatch();
    return async (dispatch) => {
        try {
            // Simulate a delay of 2 seconds
            await new Promise(resolve => setTimeout(resolve, 100));
            // Dispatch success action after the delay
            dispatch(placeOrderSuccess());
        } catch (error) {
            // Dispatch error action if there's an error
            dispatch(placeOrderFailure(error));
        }
    };
};

const placeOrderSuccess = () => {
    return {
        type: 'PLACE_ORDER_SUCCESS',
    };
};

const placeOrderFailure = (error) => {
    return {
        type: 'PLACE_ORDER_FAILURE',
        payload: error,
    };
};

export const clearCart = () => {
    return {
        type: CLEAR_CART
    };
};

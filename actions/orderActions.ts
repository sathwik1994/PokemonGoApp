import { Dispatch } from 'redux';

export const placeOrder = () => {
    return (dispatch: Dispatch) => {
        // Dispatch action to indicate order placement start
        dispatch({ type: 'PLACE_ORDER_START' });

        // Simulate order placement delay (2 seconds)
        setTimeout(() => {
            // Dispatch action to indicate order placement success
            dispatch({ type: 'PLACE_ORDER_SUCCESS' });
        }, 2000);
    };
};

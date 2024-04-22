const initialState = {
    placingOrder: false,
    orderSuccess: false,
};

const orderReducers = (state = initialState, action: { type: string }) => {
    switch (action.type) {
        case 'PLACE_ORDER_START':
            return { ...state, placingOrder: true, orderSuccess: false };
        case 'PLACE_ORDER_SUCCESS':
            return { ...state, placingOrder: false, orderSuccess: true };
        default:
            return state;
    }
};

export default orderReducers;

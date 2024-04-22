import CartItem from '../types/cartItem';

const cartItemsReducer = (state: CartItem[] = [], action: any) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const newItem = action.payload;
            const existingItemIndex = state.findIndex((item) => item.pokemon.id === newItem.id);

            if (existingItemIndex !== -1) {
                // If the item already exists in the cart, create a new array with the updated quantity
                return state.map((item, index) =>
                    index === existingItemIndex ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                // If the item is not yet in the cart, add it to the cart array
                return [...state, { pokemon: newItem, quantity: 1 }];
            }
        case 'REMOVE_FROM_CART':
            return state.filter((item) => item.pokemon.id !== action.payload);
        case 'INCREASE_QUANTITY':
            return state.map((item) =>
                item.pokemon.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
            );
        case 'DECREASE_QUANTITY':
            const updatedCartItems = state.map((item) =>
                item.pokemon.id === action.payload ? { ...item, quantity: Math.max(item.quantity - 1, 0) } : item
            );
            const itemToRemove = updatedCartItems.find((item) => item.pokemon.id === action.payload && item.quantity === 0);
            if (itemToRemove) {
                return updatedCartItems.filter((item) => item.pokemon.id !== action.payload);
            } else {
                return updatedCartItems;
            }
        case 'CLEAR_CART':
            return []; // Clear the cart by returning an empty array

        default:
            return state;
    }
};

export default cartItemsReducer;

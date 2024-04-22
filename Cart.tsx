import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList, Image, TouchableOpacity, Alert } from 'react-native';
import CartItem from './types/CartItem';
import { placeOrder, clearCart, cartView } from './actions/cartActions';
import { useDispatch } from 'react-redux';

interface CartProps {
    cartItems: CartItem[];
}

const Cart: React.FC<CartProps> = ({ cartItems }) => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);

    // Function to calculate the total cost of all the Pokémon in the cart
    const calculateTotalCost = () => {
        let totalCost = 0;
        cartItems.forEach(item => {
            // Assuming the price of each Pokémon is based on its weight attribute
            totalCost += item.pokemon.weight * item.quantity;
        });
        return totalCost;
    };

    const handlePlaceOrder = () => {
        setLoading(true);
        // Dispatch action to place order
        dispatch(placeOrder())
            .then(() => {
                // Display success message after 2 seconds
                setTimeout(() => {
                    setLoading(false);
                    Alert.alert('Order placed successfully!', '', [
                        {
                            text: 'OK',
                            onPress: () => {
                                // Dispatch action to clear cart items
                                dispatch(clearCart());
                                dispatch(cartView());
                            }
                        }
                    ]);
                }, 10);
            })
            .catch(error => {
                setLoading(false);
                console.error('Error placing order:', error);
            });
    };

    const renderItem = ({ item }: { item: CartItem }) => (
        <View style={styles.item}>
            <TouchableOpacity onPress={item.onSelectPokemon}>
                <Image source={{ uri: item.image }} style={styles.image} />
            </TouchableOpacity>
            <Text style={styles.itemQuantity} >{item.pokemon.name} x {item.quantity}</Text>
            <Text style={styles.price}>Price: ${item.pokemon.weight * item.quantity}</Text>
            <View style={styles.buttonGroup}>
                <Button title="-" onPress={item.onDecrease} />
                <Button title="+" onPress={item.onIncrease} />
                <Button title="Remove" onPress={item.onRemove} />
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cart</Text>
            <Text style={styles.totalCost}>Total Cost: ${calculateTotalCost()}</Text>
            <FlatList
                data={cartItems}
                renderItem={renderItem}
                keyExtractor={(item) => item.pokemon.id.toString()}
            />
            <Button title="Place Order" onPress={handlePlaceOrder} disabled={loading || calculateTotalCost() === 0} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#f2edee',
        borderColor: 'black',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'black'
    },
    totalCost: {
        fontSize: 18,
        marginBottom: 10,
        color: 'black'
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        paddingVertical: 10,
    },
    image: {
        width: 50,
        height: 50,
        marginRight: 10,
    },
    details: {
        flex: 1,
    },
    buttonGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 10
    },
    name: {
        fontSize: 16,
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    quantity: {
        marginHorizontal: 10,
        fontSize: 16,
    },
    itemQuantity: {
        color: 'black'
    },
    price: {
        color: 'black',
        fontStyle: 'italic'
    }
});

export default Cart;

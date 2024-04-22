import Pokemon from './Pokemon';

interface CartItem {
    pokemon: Pokemon;
    quantity: number;
    image: string;
    onIncrease: () => void;
    onDecrease: () => void;
    onRemove: () => void;
    onSelectPokemon: () => void;
}

export default CartItem;
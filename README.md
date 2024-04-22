# Pokemon Go App - React Native & Redux
## About
This is a react native app created with the typescript and redux. 

## Instructions
1. This project is created with npx. The command used is `npx react-native@latest init PokemonGoApp`.
2. I have utilized Redux framework for State management.
3. It has 3 major Views. They are PokemonList that fetches the pokemon List from the API, Cart that adds pokemons to cart and manages the items in cart and PokemonDetails that displays the details of selected Pokemon.
4. I have implemented lazy loading to fetch the pokemon list. I fetched a list of 20 pokemons first and then as we scroll down, it fetches the next set of 20 pokemons and adds it to the list and so on.
5. Actions and Reducers for Cart, Pokemon List and Pokemon Details were added in `actions` and `reducers` folders.
6. I have implemented functionalities such as Fetching pokemon data from API, display them with names and icons in scrollable Flat list, add to cart functionality, allow quantity adjustments and item removal within the cart and summary view of the cart and selected Pokémon details.

## Installation
To install and run the app, follow the following steps:
1. Clone the repository using `git clone <reop-url>`
2. Install node modules using `npm install`
3. Run the app using `npx react-native start`
4. Click `a` to run in  android or `i` to run on ios

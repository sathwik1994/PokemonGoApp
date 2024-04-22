import React from 'react';
import { View, Text, Modal, Button, StyleSheet } from 'react-native';
import Pokemon from './types/Pokemon';

interface PokemonDetailsProps {
  pokemon: Pokemon | null;
  pokemonDetails: any | null;
  onClose: () => void;
}

const PokemonDetails: React.FC<PokemonDetailsProps> = ({ pokemon, pokemonDetails, onClose }) => {
  return (
    <Modal visible={!!pokemon} animationType="slide" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>{pokemon?.name} Details</Text>
          {pokemonDetails && (
            <View>
              <Text style={styles.abilitiesTitle}> Abilities:</Text>
              <View>
                {pokemonDetails.abilities.map((ability: any, index: number) => (
                  <Text style={styles.abilitiesDesc} key={index}>{ability.ability.name}</Text>
                ))}
              </View>
              <Text style={styles.abilitiesTitle}>Cries:</Text>
              <View>
                {pokemonDetails.moves.slice(0, 5).map((move: any, index: number) => (
                  <Text style={styles.abilitiesDesc} key={index}>{move.move.name}</Text>
                ))}
              </View>
            </View>
          )}
          <Button style={styles.buttonStyle} title="Close" onPress={() => { console.log('Close button pressed'); onClose() }} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 1,
    color: 'black'
  },
  abilitiesTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 1,
    color: 'black'
  },
  abilitiesDesc: {
    color: 'black'
  }
});

export default PokemonDetails;


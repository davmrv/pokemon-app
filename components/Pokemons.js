import React from 'react';
import {
  Text,
  View,
  FlatList,
} from 'react-native';

import Pokemon from './Pokemon';

export default function Pokemons({ pokemons, navigation }) {
  return (
    <FlatList
      data={pokemons}
      renderItem={({ index, item }) => (
        <Pokemon
          key={index}
          pokemon={item}
          navigation={navigation}
        />
      )}
      keyExtractor={pokemon => pokemon.name}
    />
  );
}


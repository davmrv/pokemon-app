import React from 'react';
import {
  View,
  Text,
} from 'react-native';


import PokemonType from './PokemonType';

class PokemonTypes extends React.Component {
  static defaultProps = {
    types: [],
  };

  render() {
    return (
      <View style={{ width: '100%', flexDirection: 'row' }}>
      {
        this
          .props
          .types
          .map(({ type }, index) => (
            <PokemonType
              key={ index }
              type={ type }
            />
          ))
      }
      </View>
    );
  }
}

export default PokemonTypes;

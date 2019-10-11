import React from 'react';
import {
  Text,
  StyleSheet,
} from 'react-native';

class PokemonType extends React.Component {
  render() {
    return (
      <Text style={styles.label}>
        { this.props.type.name }
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  label: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: '#d2d1d1',
    marginRight: 5,
    borderRadius: 5,
  },
});


export default PokemonType;


import React from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
} from 'react-native';


import PokemonAbility from './PokemonAbility';

class PokemonAbilities extends React.Component {
  static defaultProps = {
    abilities: [],
  };

  render() {
    const { abilities } = this.props;

    return (
      <View style={{ paddingVertical: 10 }}>
        <Text style={styles.title}>
          Abilities
        </Text>
        <ScrollView
          style={{ width: '100%',marginVertical: 10 }}
          contentContainerStyle={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            
          }}
          horizontal={ true }
        >
        {
          abilities
          .map(({ ability }, index) => (
            <PokemonAbility
              key={index}
              ability={ability}
            />
          ))
        }
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default PokemonAbilities;


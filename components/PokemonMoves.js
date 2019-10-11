import React from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
} from 'react-native';

class PokemonMoves extends React.Component {
  static defaultProps = {
    moves: [],
  };

  render() {
    const { moves } = this.props;

    return (
      <View style={{ paddingVertical: 20 }}>
        <Text style={styles.title}>
          Pokemon Moves
        </Text>
        <ScrollView style={styles.moves} horizontal={true}>
          {
            moves
              .map(({ move }, index) => <Text key={ index }>{ move.name }</Text>)
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
  moves: {
    maxHeight: 300,
  }
});

export default PokemonMoves;


import React from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

class PokemonStats extends React.Component {
  static defaultProps = {
    stats: [],
  };

  render() {
    const { stats } = this.props;

    return (
      <View style={styles.container}>
      {
        stats
          .map(({ stat, base_stat, effort }, index) => (
            <View key={index} style={{ width: '50%' }}>
              <Text style={styles.statTitle}>{stat.name}</Text>
              <Text>{base_stat}</Text>
            </View>
          ))
      }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    flexWrap: 'wrap',
  },
  statTitle: {
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
});

export default PokemonStats;


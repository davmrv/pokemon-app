import React from 'react';
import {
  Text,
  View,
} from 'react-native';

class PokemonStats extends React.Component {
  static defaultProps = {
    stats: [],
  };

  render() {
    const { stats } = this.props;

    return stats
      .map(({ stat, base_stat, effort }, index) => (
        <View key={index} style={{ width: '50%' }}>
          <Text style={{ fontWeight: 'bold' }}>{stat.name}</Text>
          <Text>{base_stat}</Text>
        </View>
      ));
  }
}

export default PokemonStats;


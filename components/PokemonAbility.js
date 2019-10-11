import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

class PokemonAbility extends React.Component {
  state = {
    data: null,
  };

  componentDidMount() {
    fetch(this.props.ability.url)
      .then(async response => await response.json())
      .then(data => this.setState({ data }));
  }

  render() {
    const { data } = this.state;

    if (! data) {
      return false;
    }

    return (
      <View style={{ width: 175, marginRight: 20 }}>
        <View>
          <Text style={styles.title}>
            { data.name }
          </Text>
          <View style={{ backgroundColor: 'beige' }}>
            <Text style={styles.content}>
              { data.effect_entries[0].effect }
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    backgroundColor: '#FED0BB',
    fontWeight: 'bold',
    padding: 10,
  },
  content: {
    padding: 10,
  },
});

export default PokemonAbility;


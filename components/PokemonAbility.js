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

  async componentDidMount() {
    const data = await fetch(this.props.ability.url)
      .then(async response => await response.json());

    this.setState({ data });
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
          <View style={ styles.content }>
            <Text>
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
    backgroundColor: '#f1f1f1',
    fontWeight: 'bold',
    padding: 10,
  },
  content: {
    padding: 10,
    backgroundColor: '#fafafa',
  },
});

export default PokemonAbility;


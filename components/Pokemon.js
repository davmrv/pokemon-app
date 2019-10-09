import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';


import PokemonStats from './PokemonStats';

class Pokemon extends React.Component {
  state = {
    data: {
      sprites: {
        front_default: null,
      },
    },
  };

  componentDidMount() {
    const { pokemon } = this.props;

    fetch(pokemon.url)
      .then(async response => await response.json())
      .then(data => this.setState({ data }));
  }

  handlePress(pokemon) {
    this.props.navigation.navigate('Pokemon', { pokemon });
  }

  render() {
    const { pokemon } = this.props;
    const { data } = this.state;

    return (
      <TouchableWithoutFeedback
        onPress={() => this.handlePress(data)}
      >
        <View style={styles.pokemon}>
          <View style={styles.content}>
            <Image
              style={styles.image}
              source={{ uri: data.sprites.front_default }}
            />
            <View style={styles.text}>
              <Text
                style={{ width: '100%', fontSize: 22, marginBottom: 10 }}
              >
                {pokemon.name}
              </Text>
              <PokemonStats stats={data.stats} />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  pokemon: {
    width: '100%',
    paddingVertical: 10,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
    backgroundColor: 'white',
    padding: 20,
  },
  image: {
    flex: 1,
    height: 150,
    padding: 2,
    resizeMode: 'contain',
  },
  text: {
    flex: 2,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 2,
  },
});

export default Pokemon;

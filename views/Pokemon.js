import React from 'react';
import {
  Text,
  Button,
  View,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';


import PokemonSprites from '../components/PokemonSprites';
import PokemonTypes from '../components/PokemonTypes';
import PokemonAbilities from '../components/PokemonAbilities';
import PokemonStats from '../components/PokemonStats';
import PokemonMoves from '../components/PokemonMoves';

class Pokemon extends React.Component {
  state = {
    pokemon: {
      name: null,
      sprites: {},
    },
  };

  componentDidMount() {
    const pokemon = this.props.navigation.getParam('pokemon');

    this.setState({
      pokemon,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <PokemonSprites sprites={this.state.pokemon.sprites} />
        </View>
        <ScrollView
          style={styles.content}
        >
          <Text style={styles.title}>
            {this.state.pokemon.name}
          </Text>
          <View style={{ paddingVertical: 10 }}>
            <Text>
              { this.state.pokemon.height } kg - { this.state.pokemon.weight } cm
            </Text>
          </View>
          <PokemonTypes types={this.state.pokemon.types} />
          <PokemonAbilities abilities={this.state.pokemon.abilities} />
          <PokemonStats stats={this.state.pokemon.stats} />
          <PokemonMoves moves={this.state.pokemon.moves} />
        </ScrollView>
        <View
          style={styles.footer}
        >
          <Button
            style={{ fontWeight: 'bold' }}
            onPress={() => this.props.navigation.goBack()}
            title='Back'
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  title: {
    fontSize: 50,
    fontWeight: '100',
    textTransform: 'capitalize',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  footer: {
    padding: 20,
    backgroundColor: '#f1f1f1',
  },
});

export default Pokemon;


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
          <PokemonTypes types={this.state.pokemon.types} />
          <PokemonAbilities abilities={this.state.pokemon.abilities} />
        </ScrollView>
        <View
          style={{
            postion: 'fixed',
            bottom: 0,
            padding: 20,
            backgroundColor: '#f1f1f1',
            elevation: 1,
          }}
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
    padding: 20,
  },
});

export default Pokemon;


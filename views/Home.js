import React from 'react';
import {
  StyleSheet,
  FlatList,
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TextInput,
} from 'react-native';


import Pokemons from '../components/Pokemons';

class Home extends React.Component {
  state = {
    search: {
      text: '',
    },
    pokemons: {
      results: [],
    },
  };

  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon', {
      method: 'GET',
    })
    .then(async response => await response.json())
    .then(pokemons => this.setState({ pokemons }));
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="red" barStyle="light-content" />
        <View style={styles.searchBar}>
          <Text style={styles.title}>
            Pokemon List
          </Text>
        </View>
        <View style={styles.content}>
          <Pokemons navigation={this.props.navigation} pokemons={this.state.pokemons.results} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBar: {
    backgroundColor: '#DB3D3D',
    padding: 20,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  content: {
    flex: 1,
    width: '100%',
  },
});

export default Home;


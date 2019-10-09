import React from 'react';
import {
  Text,
  Button,
  View,
  StyleSheet,
  Image,
} from 'react-native';

class Pokemon extends React.Component {
  state = {
    pokemon: {
      name: null,
      sprites: {},
    },
  };

  componentDidMount() {
    this.setState({
      pokemon: this.props.navigation.getParam('pokemon')
    });
  }

  render() {
    const images = Object
      .keys(this.state.pokemon.sprites)
      .map((key, index) => (
        <Image
          key={index}
          source={{
            uri: this.state.pokemon.sprites[key],
          }}
          styles={styles.image}
        />
      ));
    
    return (
      <View style={styles.container}>
        <View>
          <Text
            style={styles.title}
          >
            {this.state.pokemon.name}
          </Text>
          <View>
            {images[0]}
          </View>
        </View>
        <View>
          <Button
            style={{ fontWeight: 'bold', marginBottom: 20 }}
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
    padding: 20,
  },
  title: {
    fontSize: 50,
    fontWeight: '100',
  },
  image: {
    height: 300,
    width: 100,
    margin: 10,
    resizeMode: 'contain',
  },
});

export default Pokemon;


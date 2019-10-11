import React from 'react';
import {
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
  View,
} from 'react-native';

function PokemonPictures({ sprites  }) {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      horizontal={true}
    >
      {
        Object
          .keys(sprites)
          .reverse()
          .map((sprite, index) => (
            sprites[sprite]
            ? (
              <View
                key={ index  }
                style={styles.imageContainer}
              >
                <Image
                  source={{ uri: sprites[sprite] }}
                  style={styles.image}
                />
              </View>
            )
            : false
          ))
      }
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    backgroundColor: '#0038A8',
  },
  imageContainer: {
    borderRadius: 1000,
    overflow: 'hidden',
    marginHorizontal: 10,
    width: 200,
  },
  image: {
    height: 220,
    width: 200,
    resizeMode: 'contain',
    padding: 10,
  },
})

export default PokemonPictures;


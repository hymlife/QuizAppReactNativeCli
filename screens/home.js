import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Title from '../component/title';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Title titleText="Home" />
      <View style={styles.bannerContainer}>
        <Image
          source={{
            uri: 'https://img.freepik.com/premium-vector/quiz-comic-pop-art-style_175838-505.jpg?w=2000',
          }}
          style={{width: 300, height: 300}}
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Quiz')}
        style={styles.button}>
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 15,
    height: '100%',
  },
  bannerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },

  button: {
    marginTop: 25,
    borderRadius: 8,
    backgroundColor: 'gray',
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },
  buttonText: {fontSize: 24, color: 'white'},
});

export default Home;

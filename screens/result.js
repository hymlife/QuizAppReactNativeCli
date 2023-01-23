import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Title from '../component/title';

const Result = ({navigation, route}) => {
  const {score} = route.params;
  return (
    <View style={styles.container}>
      <Title titleText="Result" />
      <View style={styles.scoreContainer}>
        <Text style={styles.scoreText}>{score}</Text>
      </View>
      <View style={styles.bannerContainer}>
        <Image
          source={{
            uri: 'https://img.freepik.com/premium-vector/quiz-comic-pop-art-style_175838-505.jpg?w=2000',
          }}
          style={{width: 300, height: 300}}
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={styles.button}>
        <Text style={{color: 'white'}}>Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Result;

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

  scoreText: {
    fontSize: 40,
    fontWeight: 500,
  },
  scoreContainer: {
    marginTop: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

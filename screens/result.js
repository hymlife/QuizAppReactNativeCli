import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const Result = ({navigation}) => {
  return (
    <View>
      <View style={styles.bannerContainer}>
        <Image
          source={{
            uri: 'https://img.freepik.com/premium-vector/quiz-comic-pop-art-style_175838-505.jpg?w=2000',
          }}
          style={{width: 150, height: 150}}
        />
      </View>

      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text>Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
  bannerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

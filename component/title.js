import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Title = ({titleText}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{titleText}</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    marginTop: 15,
  },
  title: {
    fontSize: 30,
    fontWeight: '600',
  },
});

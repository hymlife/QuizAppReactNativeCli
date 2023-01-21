import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {resolve} from 'path';

const Quiz = ({navigation}) => {
  const [questions, setQuestions] = useState();
  const [ques, setQues] = useState(0);
  const getQuiz = async () => {
    const url = 'https://opentdb.com/api.php?amount=10&type=multiple';
    const res = await fetch(url);
    const data = await res.json();
    setQuestions(data.results);
  };
  useEffect(() => {
    getQuiz();
  }, []);

  return (
    <View style={styles.container}>
      {questions && (
        <View style={styles.parent}>
          <View style={styles.top}>
            <Text style={styles.question}>Sa Sa Sa</Text>
          </View>

          <View style={styles.options}>
            <TouchableOpacity style={styles.optionButton}>
              <Text style={styles.option}>Cool Question</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton}>
              <Text style={styles.option}>Cool Question</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton}>
              <Text style={styles.option}>Cool Question</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.optionButton}>
              <Text style={styles.option}>Cool Question</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.bottom}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>SKİP</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>NEXT</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: '100%',
  },
  parent: {
    height: '100%',
  },
  top: {
    marginVertical: 12,
  },
  question: {fontSize: 28},
  options: {
    marginVertical: 12,
    flex: 1,
  },
  option: {
    fontSize: 18,
    fontWeight: '500',
    color: 'white',
  },

  optionButton: {
    paddingVertical: 16,
    paddingHorizontal: 12,
    marginVertical: 10,
    backgroundColor: '#34A0A4',
    borderRadius: 6,
  },
  bottom: {
    marginBottom: 40,
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
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

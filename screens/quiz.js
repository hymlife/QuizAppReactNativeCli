import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {resolve} from 'path';

const shuffleArray = array => {
  for (let i = array.lenght - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

const Quiz = ({navigation}) => {
  const [questions, setQuestions] = useState();
  const [ques, setQues] = useState(0);
  const [options, setOptions] = useState([]);
  const [score, setScore] = useState(0);

  const getQuiz = async () => {
    const url =
      'https://opentdb.com/api.php?amount=10&type=multiple&encode=url3986';
    const res = await fetch(url);
    const data = await res.json();
    setQuestions(data.results);
    setOptions(generateOptionsAndShuffle(data.results[0]));
  };
  useEffect(() => {
    getQuiz();
  }, []);

  const handleNextPress = () => {
    setQues(ques + 1);
    setOptions(generateOptionsAndShuffle(questions[ques + 1]));
  };

  const generateOptionsAndShuffle = _question => {
    const options = [..._question.incorrect_answers];
    options.push(_question.corrent_answer);
    shuffleArray(options);

    return options;
  };

  const handleSelectedOption = _option => {
    if (_option === questions[ques].corrent_answer) {
      setScore(score + 10);
    }
    setQues(ques + 1);
    setOptions(generateOptionsAndShuffle(questions[ques + 1]));
    console.log(_option === questions[ques].corrent_answer);
  };
  return (
    <View style={styles.container}>
      {questions && (
        <View style={styles.parent}>
          <View style={styles.top}>
            <Text style={styles.question}>
              {decodeURIComponent(questions[ques].question)}
            </Text>
          </View>

          <View style={styles.options}>
            <TouchableOpacity
              style={styles.optionButton}
              onPress={() => handleSelectedOption(options[0])}>
              <Text style={styles.option}>
                {decodeURIComponent(options[0])}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.optionButton}
              onPress={() => handleSelectedOption(options[1])}>
              <Text style={styles.option}>
                {decodeURIComponent(options[1])}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.optionButton}
              onPress={() => handleSelectedOption(options[2])}>
              <Text style={styles.option}>
                {decodeURIComponent(options[2])}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.optionButton}
              onPress={() => handleSelectedOption(options[3])}>
              <Text style={styles.option}>
                {decodeURIComponent(options[3])}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.bottom}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>SKİP</Text>
            </TouchableOpacity>

            {ques !== 9 && (
              <TouchableOpacity style={styles.button} onPress={handleNextPress}>
                <Text style={styles.buttonText}>NEXT</Text>
              </TouchableOpacity>
            )}

            {ques === 9 && (
              <TouchableOpacity style={styles.button} onPress={() => null}>
                <Text style={styles.buttonText}>SHOW RESULT</Text>
              </TouchableOpacity>
            )}
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

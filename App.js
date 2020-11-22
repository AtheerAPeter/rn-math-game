/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';

const App = () => {
  const [number, setNumber] = useState('');
  const [btn1, setBtn1] = useState(0);
  const [btn2, setBtn2] = useState(0);
  const [btn3, setBtn3] = useState(0);
  const [score, setScore] = useState(0);
  const operations = ['-', '+', '/', '*'];

  useEffect(() => {
    generateNew();
  }, []);

  const generateNew = () => {
    let answers = [];
    const equasion = `${Math.floor(Math.random() * 20)} ${
      operations[Math.floor(Math.random() * operations.length)]
    } ${Math.floor(Math.random() * 20)} `;
    setNumber(equasion);
    answers.push(eval(equasion) + 1);
    answers.push(eval(equasion));
    answers.push(eval(equasion) - 1);

    let random = Math.floor(Math.random() * 3);
    setBtn1(answers[random]);
    answers = answers.filter((e) => e != answers[random]);

    random = Math.floor(Math.random() * 2);
    setBtn2(answers[random]);
    answers = answers.filter((e) => e != answers[random]);

    setBtn3(answers[0]);
  };

  const handleAnswer = (e) => {
    console.log(e);
    if (e == eval(number)) {
      setScore(score + 10);
      generateNew();
      return;
    }
    if (score > 0) {
      setScore(score - 10);
      generateNew();
      return;
    }
    generateNew();
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />

      <View style={styles.navBar}>
        <Text style={styles.title}>Simple Math Game</Text>
      </View>

      <View style={styles.body}>
        <View>
          <Text style={{fontSize: 20}}>Score: {score}</Text>
        </View>

        <Text style={styles.text}>{number}</Text>
        <TouchableOpacity
          onPress={() => handleAnswer(btn1)}
          style={styles.appButtonContainer}>
          <Text style={styles.appButtonText}>{btn1}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleAnswer(btn2)}
          style={styles.appButtonContainer}>
          <Text style={styles.appButtonText}>{btn2}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleAnswer(btn3)}
          style={styles.appButtonContainer}>
          <Text style={styles.appButtonText}>{btn3}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  body: {
    backgroundColor: '#eee',
    height: '100%',
  },
  appButtonContainer: {
    elevation: 10,

    backgroundColor: '#6a96d9',
    width: '80%',
    height: 50,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    alignSelf: 'center',
    marginVertical: 20,
  },
  appButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  text: {
    alignSelf: 'center',
    marginBottom: 200,
    color: '#000',
    marginTop: 40,
    fontWeight: 'bold',
    fontSize: 30,
  },
  instructions: {
    alignSelf: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    elevation: 4,
  },
  navBar: {
    height: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eee',
    borderBottomColor: '#969696',
    borderBottomWidth: 0.5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
export default App;

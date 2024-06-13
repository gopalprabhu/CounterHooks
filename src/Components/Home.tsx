import React, {useEffect, useState} from 'react';
import {
  Button,
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
} from 'react-native';

const CounterHome = () => {
  const [counter, setCounter] = useState(0);
  const [increment, setIncrement] = useState(0);
  const [decrement, setDecrement] = useState(0);
  const [bgColor, setBgColor] = useState('ded4a2');
  useEffect(() => {
    setBgColor('#eb0c47');
    setTimeout(() => setBgColor('#ded4a2'), 100);
    console.log('UseEffect WOrks on counter Chang', counter);
  }, [decrement]);
  useEffect(() => {
    setBgColor('#1bc704');
    setTimeout(() => setBgColor('#ded4a2'), 100);
    console.log('UseEffect WOrks on counter Chang', counter);
  }, [increment]);

  return (
    <View>
      <View style={[styles.counterContainer, {backgroundColor: bgColor}]}>
        <TouchableOpacity>
          <Text
            style={styles.counterContainerText}
            onPress={() => {
              setCounter(counter - 1);
              setDecrement(decrement + 1);
            }}>
            -
          </Text>
        </TouchableOpacity>
        <Text style={styles.counterContainerText}>{counter}</Text>
        <TouchableOpacity>
          <Text
            style={styles.counterContainerText}
            onPress={() => {
              setCounter(counter + 1);
              setIncrement(increment + 1);
            }}>
            +
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  counterContainer: {
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#ded4a2',
    flexDirection: 'row',
    margin: 20,
    borderRadius: 15,
  },
  counterContainerText: {
    fontSize: 45,
    padding: 30,
  },
});

export default CounterHome;

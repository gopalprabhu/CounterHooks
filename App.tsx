import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import CounterHome from './src/Components/Home';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <CounterHome />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center'},
});

export default App;

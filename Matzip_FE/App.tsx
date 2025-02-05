/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';


function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';


  return (
    <NavigationContainer>
      <View style={styles.container}></View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default App;

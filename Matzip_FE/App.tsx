/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import RootNavigator from '@/navigations/root/RootNavigator';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

export default App;

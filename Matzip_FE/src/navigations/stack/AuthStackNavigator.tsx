import {authNavigations} from '@/constants/navigations';
import AuthHomeScreen from '../../screens/Auth/AuthHomeScreen';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {View} from 'react-native';

export type AuthStackParamList = {
  [authNavigations.AUTH_HOME]: undefined;
  [authNavigations.AUTH_LOGIN]: undefined;
  [authNavigations.AUTH_SIGNUP]: undefined;
};

const Stack = createStackNavigator<AuthStackParamList>();

function AuthStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={authNavigations.AUTH_HOME}
        component={AuthHomeScreen}
      />
    </Stack.Navigator>
  );
}

export default AuthStackNavigator;

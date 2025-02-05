import React from 'react';
import {AuthStackParamList} from '@/navigations/stack/AuthStackNavigator';
import {StackScreenProps} from '@react-navigation/stack';
import {authNavigations} from '@/constants/navigations';
import {StyleSheet, Text, View} from 'react-native';

type AuthScreenProps = StackScreenProps<
  AuthStackParamList,
  typeof authNavigations.AUTH_HOME
>;

const AuthHomeScreen = ({navigation}: AuthScreenProps) => {
  return (
    <View>
      <Text>AuthHomeScreen</Text>
    </View>
  );
};

export default AuthHomeScreen;

const styles = StyleSheet.create({
  container: {},
});

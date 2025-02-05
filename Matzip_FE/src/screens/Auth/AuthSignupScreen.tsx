import {authNavigations} from '@/constants';
import {AuthStackParamList} from '@/navigations/stack/AuthStackNavigator';
import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

type AuthScreenProps = StackScreenProps<
  AuthStackParamList,
  typeof authNavigations.AUTH_SIGNUP
>;

const AuthSignupScreen = ({navigation}: AuthScreenProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>SignupScreen</Text>
    </SafeAreaView>
  );
};

export default AuthSignupScreen;

const styles = StyleSheet.create({
  container: {},
});

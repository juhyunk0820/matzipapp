import {authNavigations} from '@/constants';
import {AuthStackParamList} from '@/navigations/stack/AuthStackNavigator';
import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

type AuthScreenProps = StackScreenProps<
  AuthStackParamList,
  typeof authNavigations.AUTH_LOGIN
>;

const AuthLoginScreen = ({navigation}: AuthScreenProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>LoginScreen</Text>
    </SafeAreaView>
  );
};

export default AuthLoginScreen;

const styles = StyleSheet.create({
  container: {},
});

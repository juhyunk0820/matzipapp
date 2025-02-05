import React from 'react';
import MainDrawerNavigator from '@/navigations/drawer/MainDrawerNavigator';
import AuthStackNavigator from '@/navigations/stack/AuthStackNavigator';

function RootNavigator() {
  const isLogin = false;

  return <>{isLogin ? <MainDrawerNavigator /> : <AuthStackNavigator />}</>;
}

export default RootNavigator;

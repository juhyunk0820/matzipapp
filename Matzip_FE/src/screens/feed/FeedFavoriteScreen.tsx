import FeedFavoriteList from '@/components/feed/FeedFavoriteList';
import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

interface FeedFavoriteScreenProps {}

function FeedFavoriteScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <FeedFavoriteList />
    </SafeAreaView>
  );
}

export default FeedFavoriteScreen;

const styles = StyleSheet.create({
  container: {},
});

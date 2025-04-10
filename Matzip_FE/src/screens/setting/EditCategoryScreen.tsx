import useAuth from '@/hooks/queries/useAuth';
import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text} from 'react-native';

function EditCategoryScreen() {
  const {getProfileQuery} = useAuth();
  const {categories} = getProfileQuery.data || {};
  return (
    <SafeAreaView>
      <ScrollView style={styles.contentContainer}></ScrollView>
    </SafeAreaView>
  );
}

export default EditCategoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  contentContainer: {},
});

import {ImageUri} from '@/types';
import React from 'react';
import {
  Image,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

interface PreviewImageListProps {
  imageUris: ImageUri[];
}

function PreviewImageList({imageUris}: PreviewImageListProps) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        {imageUris.map(({uri}, index) => {
          return (
            <Pressable style={styles.imageContainer}>
              <Image
                key={index}
                source={{
                  uri: `${
                    Platform.OS === 'ios'
                      ? `http://localhost:3030/${uri}`
                      : `http://10.0.2.2:3030/${uri}`
                  }`,
                }}
                resizeMode="cover"
                style={styles.image}
              />
            </Pressable>
          );
        })}
      </View>
    </ScrollView>
  );
}

export default PreviewImageList;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    gap: 15,
  },
  imageContainer: {
    width: 70,
    height: 70,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

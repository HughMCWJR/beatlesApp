import React from 'react';
import { useAsync } from 'react-async';
import { FlatList, StyleSheet, Image } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import FetchPreviews from '../components/FetchPreviews';
import Song from '../components/Song';
import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Definetely The Beatles Yes...</Text>
      <Text style={styles.title}>Gallery</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View style={styles.flex}>
        <Image style={styles.image} source="https://i.imgur.com/fioCAzl.jpeg"></Image>
        <Image style={styles.image} source="https://i.imgur.com/fSoKiMS.png"></Image>
      </View>
      <View style={styles.flex}>
        <Image style={styles.image} source="https://i.imgur.com/sK0T0tcb.jpg"></Image>
        <Image style={styles.image} source="https://i.imgur.com/T9Cc1aGb.jpg"></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  item: {
    fontSize: 20,
  },
  image: {
    width: 400,
    height: 400
  },
  flex: {
    flex: 1,
    flexDirection: "row"
  }
});

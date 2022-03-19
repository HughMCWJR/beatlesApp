import React from 'react';
import { Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import FetchConcerts, { ConcertData } from '../components/FetchConcerts';
import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';
import { RootTabScreenProps } from '../types';

import { useAsync } from "react-async"

export let currentConcert: ConcertData

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {

  const fetch = useAsync({ promiseFn: FetchConcerts})

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Definetely The Beatles Yes...</Text>
      <Text style={styles.title}>Tour Dates</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <FlatList data={fetch.data} renderItem={({item}) => <Button title={item.location.city + ", " + item.location.state} onPress={() => { currentConcert = item
        navigation.navigate("Concert")}} color="black" ></Button>} />
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
  bandName: {
    fontSize: 100,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  item: {
    fontSize: 20,
  },
});

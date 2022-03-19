import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { FlatList, Platform, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { ConcertData } from '../components/FetchConcerts';
import Song from '../components/Song';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { currentConcert } from './TabOneScreen';

export default function ConcertScreen() {

  //const { data } = route.params;
  //console.log(data)

  const concert = currentConcert

  return (
    <View style={styles.container}>
      <Text style={styles.bandName}> 100% Not Royal Blood </Text>
      <Text style={styles.title}>{concert.date.substring(0, 10)}</Text>
      <FlatList data={concert.setList} renderItem={({item}) => <Song songName={item} />} />
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
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
});

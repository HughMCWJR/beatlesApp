import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import FetchPreviews from "./FetchPreviews";
import { Text } from '../components/Themed';
import {Audio} from "expo-av"

/*
const getSongID = (songName: string): string | null => {
    switch (songName) {
        case "Figure It Out":
            return "6V0A3jkb9ntudO0kmcJ1xd"
    }

    return null
}*/

const play = async (songName: string) => {

    /*const songID = getSongID(songName)

    if (songID === null) {
        console.log("SongID not set")
        return
    }*/

    let preview_url = await FetchPreviews(songName)

    if (preview_url === null) {
        console.log("Preview does not exist")
        return
    }

    const audio = await Audio.Sound.createAsync(
        {uri: preview_url as string}
     );
     await audio.sound.playAsync()

}

export default function Song({songName}: {songName: string}) {

    return (
        <TouchableOpacity onPress={() => play(songName)} style={styles.container}>
          <Text >
          {songName}
          </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
      fontSize: 20,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
  });
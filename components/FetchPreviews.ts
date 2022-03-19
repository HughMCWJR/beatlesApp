import querystring from 'querystring';
import { useAsync } from 'react-async';

const client_id = "94a9fa1f778f458fa1bf75e229cc015f"
const client_secret = "e5f46c6d00ba464ca3ff9274bfa614aa";
//const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {

    const response = await fetch(TOKEN_ENDPOINT, {
        method: 'POST',
        headers: {
        Authorization: `Basic ${basic}`,
        'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
        grant_type: 'client_credentials'
        }).toString(),
    });

    return response.json();
}

//const TOP_TRACKS_ENDPOINT = "https://api.spotify.com/v1/tracks/2CgOd0Lj5MuvOqzqdaAXtS";
const TRACKS_ENDPOINT = "https://api.spotify.com/v1/tracks/";
const SEARCH_ENDPOINT = "https://api.spotify.com/v1/search?q=";

export const getTopTracks = async (songName: string) => {
    const { access_token } = await getAccessToken();

    // Get song id from name
    const response = await fetch(SEARCH_ENDPOINT + songName.replaceAll(" ", "%20") + "&type=track", {
        headers: {
        Authorization: `Bearer ${access_token}`
        }
    });

    const song = (await response.json()).tracks.items[0]

    if (song === undefined) {
        console.log(songName + " does not exist")
        return null
    }

    // Get preview url
    return fetch(TRACKS_ENDPOINT + song.id, {
        headers: {
        Authorization: `Bearer ${access_token}`
        }
    });
};

const FetchPreviews = async (songName: string) => {

    const response = await getTopTracks(songName);

    if (response === null) return null

    const resp = await response.json();

    return resp.preview_url as string | null
    
  };

export default FetchPreviews
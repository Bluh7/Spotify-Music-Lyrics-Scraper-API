# Spotify Lyrics Scraper API

API that will use web scraping to get lyrics from spotify with puppeteer.

## Requirements

Google Chrome<br>
Client id and client secret from spotify application that you can get here: https://developer.spotify.com/dashboard<br>
Spotify cookies from any account in json format that you can get using this extension: https://chrome.google.com/webstore/detail/nmckokihipjgplolmcmjakknndddifde

## Endpoints

#### `GET /lyrics`
This endpoint will return lyrics from the track that you want in an array

#### Params

`trackid`: The track id that you can get from spotify website or from searching through `GET /search`<br>

#### Usage example

```
GET /lyrics?trackid=2RBcYkonAofm0rYycVrCGt
```

#### `GET /search`
This endpoint will use the official Spotify API to make a search.

#### Params

`query`: Your search query.<br>
`type`: The type of item you want to search across. Allowed values: "album", "artist", "playlist", "track", "show", "episode" and "audiobook".<br>
`limit`: The maximum number of results to return in a range from 0 to 50.<br>
`market`: (optional) An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.

#### Usage example

```
GET /search?query=Midnight Healing&type=track&limit=2&market=US
```

#### `GET /track`
This endpoint will use the official Spotify API to get information from a specific song

#### Params

`id`: The track id that you can get from spotify website or from searching through `GET /search`<br>
`market`: (optional) An ISO 3166-1 alpha-2 country code. If a country code is specified, only content that is available in that market will be returned.

#### Usage example

```
GET /track?id=2RBcYkonAofm0rYycVrCGt
```

#### `POST /token`
This endpoint will get a new token from the official Spotify API

#### Request body

`"secret": "Your environment secret"`

#### Usage example

```
POST /token

{
  "secret": "*********"
}
```

## Photo as example from Daft Punk Giorgio by Moroder

![Example](https://github.com/Bluh7/spotify-lyrics-scraper/assets/94490806/f593d178-aade-4bed-a5b0-54a63b304484)

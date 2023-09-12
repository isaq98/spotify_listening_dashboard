import { useState, useEffect } from 'react';
import { getUsersTopItems } from '../../Utils/SpotifyAPICalls';

interface GeneralUserDataProps {
    accessToken: string;
}

function GeneralUserData({accessToken}: GeneralUserDataProps) {
    const [userTopArtists, setUserTopArtists] = useState<[]>([]);
    const [userTopTracks, setUserTopTracks] = useState<[]>([]);

    useEffect(() => {
        getUsersTopItems(accessToken).then((data) => setUserTopArtists(data['items']));
        getUsersTopItems(accessToken, 1).then((data) => console.log(data['items']));
    }, [accessToken])

    const renderUserArtists = () => {
        /* From userTopArtists, we're gonna take:
            -genres[0],
            -name,
            -popularity

        */
        return userTopArtists.map((elem) => <li key={elem['name']}>{elem['name']}</li>)
    };

    const renderUserTracks = () => {
        /* From userTopTracks, we're gonna take: 
            -name,
            -popularity
        */
        return userTopTracks.map((elem) => <li key={elem['name']}></li>)
    }

    return (
        <div>
            <ul className="list-none">
                {renderUserArtists()}
            </ul>
        </div>
    )
}

export default GeneralUserData;

/* 

Top Artist Object: 

[
    {
        "external_urls": {
            "spotify": "https://open.spotify.com/artist/1hLiboQ98IQWhpKeP9vRFw"
        },
        "followers": {
            "href": null,
            "total": 0
        },
        "genres": [
            "indie pop"
        ],
        "href": "https://api.spotify.com/v1/artists/1hLiboQ98IQWhpKeP9vRFw",
        "id": "1hLiboQ98IQWhpKeP9vRFw",
        "images": [
            {
                "height": 640,
                "url": "https://i.scdn.co/image/ab6761610000e5eb1a6373c01e8b86e289859f57",
                "width": 640
            },
            {
                "height": 320,
                "url": "https://i.scdn.co/image/ab676161000051741a6373c01e8b86e289859f57",
                "width": 320
            },
            {
                "height": 160,
                "url": "https://i.scdn.co/image/ab6761610000f1781a6373c01e8b86e289859f57",
                "width": 160
            }
        ],
        "name": "boygenius",
        "popularity": 67,
        "type": "artist",
        "uri": "spotify:artist:1hLiboQ98IQWhpKeP9vRFw"
    },
    {
        "external_urls": {
            "spotify": "https://open.spotify.com/artist/0knGpCTbmG4ctl1wzYRZs4"
        },
        "followers": {
            "href": null,
            "total": 0
        },
        "genres": [
            "bedroom soul"
        ],
        "href": "https://api.spotify.com/v1/artists/0knGpCTbmG4ctl1wzYRZs4",
        "id": "0knGpCTbmG4ctl1wzYRZs4",
        "images": [
            {
                "height": 640,
                "url": "https://i.scdn.co/image/ab6761610000e5eb8da3e6e26f2cd05958f17a65",
                "width": 640
            },
            {
                "height": 320,
                "url": "https://i.scdn.co/image/ab676161000051748da3e6e26f2cd05958f17a65",
                "width": 320
            },
            {
                "height": 160,
                "url": "https://i.scdn.co/image/ab6761610000f1788da3e6e26f2cd05958f17a65",
                "width": 160
            }
        ],
        "name": "Dijon",
        "popularity": 56,
        "type": "artist",
        "uri": "spotify:artist:0knGpCTbmG4ctl1wzYRZs4"
    },
    {
        "external_urls": {
            "spotify": "https://open.spotify.com/artist/1r1uxoy19fzMxunt3ONAkG"
        },
        "followers": {
            "href": null,
            "total": 0
        },
        "genres": [
            "indie pop",
            "la indie",
            "pov: indie"
        ],
        "href": "https://api.spotify.com/v1/artists/1r1uxoy19fzMxunt3ONAkG",
        "id": "1r1uxoy19fzMxunt3ONAkG",
        "images": [
            {
                "height": 640,
                "url": "https://i.scdn.co/image/ab6761610000e5eb626686e362d30246e816cc5b",
                "width": 640
            },
            {
                "height": 320,
                "url": "https://i.scdn.co/image/ab67616100005174626686e362d30246e816cc5b",
                "width": 320
            },
            {
                "height": 160,
                "url": "https://i.scdn.co/image/ab6761610000f178626686e362d30246e816cc5b",
                "width": 160
            }
        ],
        "name": "Phoebe Bridgers",
        "popularity": 76,
        "type": "artist",
        "uri": "spotify:artist:1r1uxoy19fzMxunt3ONAkG"
    },
    {
        "external_urls": {
            "spotify": "https://open.spotify.com/artist/1Uk1GyijF6fSfX4mWq5bfR"
        },
        "followers": {
            "href": null,
            "total": 0
        },
        "genres": [
            "indie pop"
        ],
        "href": "https://api.spotify.com/v1/artists/1Uk1GyijF6fSfX4mWq5bfR",
        "id": "1Uk1GyijF6fSfX4mWq5bfR",
        "images": [
            {
                "height": 640,
                "url": "https://i.scdn.co/image/ab6761610000e5eb97a2dc368d4d5b596779cca1",
                "width": 640
            },
            {
                "height": 320,
                "url": "https://i.scdn.co/image/ab6761610000517497a2dc368d4d5b596779cca1",
                "width": 320
            },
            {
                "height": 160,
                "url": "https://i.scdn.co/image/ab6761610000f17897a2dc368d4d5b596779cca1",
                "width": 160
            }
        ],
        "name": "Samia",
        "popularity": 50,
        "type": "artist",
        "uri": "spotify:artist:1Uk1GyijF6fSfX4mWq5bfR"
    }
]





Top Tracks Object:
    {
    "album": {
        "album_type": "ALBUM",
        "artists": [
            {
                "external_urls": {
                    "spotify": "https://open.spotify.com/artist/1hLiboQ98IQWhpKeP9vRFw"
                },
                "href": "https://api.spotify.com/v1/artists/1hLiboQ98IQWhpKeP9vRFw",
                "id": "1hLiboQ98IQWhpKeP9vRFw",
                "name": "boygenius",
                "type": "artist",
                "uri": "spotify:artist:1hLiboQ98IQWhpKeP9vRFw"
            }
        ],
        "available_markets": [
            "AD",
            "AE",
            "AR",
            "AT",
            "AU",
            "BE",
            "BG",
            "BH",
            "BO",
            "BR",
            "CA",
            "CH",
            "CL",
            "CO",
            "CR",
            "CY",
            "CZ",
            "DE",
            "DK",
            "DO",
            "DZ",
            "EC",
            "EE",
            "EG",
            "ES",
            "FI",
            "FR",
            "GB",
            "GR",
            "GT",
            "HK",
            "HN",
            "HU",
            "ID",
            "IE",
            "IL",
            "IN",
            "IS",
            "IT",
            "JO",
            "JP",
            "KW",
            "LB",
            "LI",
            "LT",
            "LU",
            "LV",
            "MA",
            "MC",
            "MT",
            "MX",
            "MY",
            "NI",
            "NL",
            "NO",
            "NZ",
            "OM",
            "PA",
            "PE",
            "PH",
            "PL",
            "PS",
            "PT",
            "PY",
            "QA",
            "RO",
            "SA",
            "SE",
            "SG",
            "SK",
            "SV",
            "TH",
            "TN",
            "TR",
            "TW",
            "US",
            "UY",
            "VN",
            "ZA"
        ],
        "external_urls": {
            "spotify": "https://open.spotify.com/album/0e9GjrztzBw8oMC6n2CDeI"
        },
        "href": "https://api.spotify.com/v1/albums/0e9GjrztzBw8oMC6n2CDeI",
        "id": "0e9GjrztzBw8oMC6n2CDeI",
        "images": [
            {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b27343fc02bcfa7cd4e6bb66aa22",
                "width": 640
            },
            {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e0243fc02bcfa7cd4e6bb66aa22",
                "width": 300
            },
            {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d0000485143fc02bcfa7cd4e6bb66aa22",
                "width": 64
            }
        ],
        "name": "the record",
        "release_date": "2023-03-31",
        "release_date_precision": "day",
        "total_tracks": 12,
        "type": "album",
        "uri": "spotify:album:0e9GjrztzBw8oMC6n2CDeI"
    },
    "artists": [
        {
            "external_urls": {
                "spotify": "https://open.spotify.com/artist/1hLiboQ98IQWhpKeP9vRFw"
            },
            "href": "https://api.spotify.com/v1/artists/1hLiboQ98IQWhpKeP9vRFw",
            "id": "1hLiboQ98IQWhpKeP9vRFw",
            "name": "boygenius",
            "type": "artist",
            "uri": "spotify:artist:1hLiboQ98IQWhpKeP9vRFw"
        },
        {
            "external_urls": {
                "spotify": "https://open.spotify.com/artist/12zbUHbPHL5DGuJtiUfsip"
            },
            "href": "https://api.spotify.com/v1/artists/12zbUHbPHL5DGuJtiUfsip",
            "id": "12zbUHbPHL5DGuJtiUfsip",
            "name": "Julien Baker",
            "type": "artist",
            "uri": "spotify:artist:12zbUHbPHL5DGuJtiUfsip"
        },
        {
            "external_urls": {
                "spotify": "https://open.spotify.com/artist/1r1uxoy19fzMxunt3ONAkG"
            },
            "href": "https://api.spotify.com/v1/artists/1r1uxoy19fzMxunt3ONAkG",
            "id": "1r1uxoy19fzMxunt3ONAkG",
            "name": "Phoebe Bridgers",
            "type": "artist",
            "uri": "spotify:artist:1r1uxoy19fzMxunt3ONAkG"
        },
        {
            "external_urls": {
                "spotify": "https://open.spotify.com/artist/07D1Bjaof0NFlU32KXiqUP"
            },
            "href": "https://api.spotify.com/v1/artists/07D1Bjaof0NFlU32KXiqUP",
            "id": "07D1Bjaof0NFlU32KXiqUP",
            "name": "Lucy Dacus",
            "type": "artist",
            "uri": "spotify:artist:07D1Bjaof0NFlU32KXiqUP"
        }
    ],
    "available_markets": [
        "AD",
        "AE",
        "AR",
        "AT",
        "AU",
        "BE",
        "BG",
        "BH",
        "BO",
        "BR",
        "CA",
        "CH",
        "CL",
        "CO",
        "CR",
        "CY",
        "CZ",
        "DE",
        "DK",
        "DO",
        "DZ",
        "EC",
        "EE",
        "EG",
        "ES",
        "FI",
        "FR",
        "GB",
        "GR",
        "GT",
        "HK",
        "HN",
        "HU",
        "ID",
        "IE",
        "IL",
        "IN",
        "IS",
        "IT",
        "JO",
        "JP",
        "KW",
        "LB",
        "LI",
        "LT",
        "LU",
        "LV",
        "MA",
        "MC",
        "MT",
        "MX",
        "MY",
        "NI",
        "NL",
        "NO",
        "NZ",
        "OM",
        "PA",
        "PE",
        "PH",
        "PL",
        "PS",
        "PT",
        "PY",
        "QA",
        "RO",
        "SA",
        "SE",
        "SG",
        "SK",
        "SV",
        "TH",
        "TN",
        "TR",
        "TW",
        "US",
        "UY",
        "VN",
        "ZA"
    ],
    "disc_number": 1,
    "duration_ms": 257213,
    "explicit": true,
    "external_ids": {
        "isrc": "USUG12209243"
    },
    "external_urls": {
        "spotify": "https://open.spotify.com/track/0FUGzUqkqRktGBvIeM3p2X"
    },
    "href": "https://api.spotify.com/v1/tracks/0FUGzUqkqRktGBvIeM3p2X",
    "id": "0FUGzUqkqRktGBvIeM3p2X",
    "is_local": false,
    "name": "Revolution 0",
    "popularity": 63,
    "preview_url": "https://p.scdn.co/mp3-preview/fc089ff287ef7876fc0efb60eb8f46f45b032529?cid=6b5e674851364702b9c7fd113c40b80b",
    "track_number": 7,
    "type": "track",
    "uri": "spotify:track:0FUGzUqkqRktGBvIeM3p2X"
}
*/
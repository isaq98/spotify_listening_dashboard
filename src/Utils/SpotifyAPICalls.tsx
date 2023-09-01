export async function getAccessToken(): Promise<any> {
    const authParameters: Object = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `grant_type=client_credentials&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    };
    let res = await fetch('https://accounts.spotify.com/api/token', authParameters);
    let data = await res.json();
    return data.access_token;
}

export async function getUsersTopItems(accessToken: string, dataType?: number): Promise<any> {
    const requestParameters: Object = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + accessToken
        }
    };
    // let res = await fetch(`https://api.spotify.com/v1/me/top/${dataType === 1 ? 'tracks' : 'artists'}?limit=10&time_range=medium_term`, requestParameters)
    //     .then((res) => console.log(res))

    /* Need to add a user authentication feature in order to retrieve user data for the app */
    let res = await fetch('https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg', requestParameters);
    let data = await res.json();
    console.log('artist data: ' , data);

}
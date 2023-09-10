export async function getUsersTopItems(accessToken: string, dataType?: number) {
    const requestParameters: Object = {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + accessToken
        }
    };
    let res = await fetch(`https://api.spotify.com/v1/me/top/${dataType === 1 ? 'tracks' : 'artists'}?limit=10&time_range=medium_term`, requestParameters);
    let data = await res.json();
    return data;
}
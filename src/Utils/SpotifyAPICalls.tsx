export async function getAccessToken(): Promise<any> {
    const authParameters: Object = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `grant_type=client_credentials&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    };
    let res= await fetch('https://accounts.spotify.com/api/token', authParameters);
    let data = await res.json();
    return data.access_token;
}
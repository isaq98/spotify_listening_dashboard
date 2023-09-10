import { useState, useEffect, useCallback } from 'react';
import { getAccessToken, getUsersTopItems } from '../../Utils/SpotifyAPICalls';

function GeneralUserData() {
   const [accessToken, setAccessToken] = useState<string>('');

    const fetchData = useCallback(async () => {
        const data = await getAccessToken();
        setAccessToken(data);
    }, [])

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    useEffect(() => {
        getUsersTopItems(accessToken);
    }, [accessToken]);

    return (
        <div>Howdy</div>
    )
}

export default GeneralUserData;
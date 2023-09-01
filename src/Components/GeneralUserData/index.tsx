import { useState, useEffect, useCallback } from 'react';
import { getAccessToken } from '../../Utils/SpotifyAPICalls';

function GeneralUserData() {
    const [accessToken, setAccessToken] = useState<String>('');

    const fetchData = useCallback(async () => {
        const data = await getAccessToken();
        setAccessToken(data);
    }, [])

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <div>Howdy</div>
    )
}

export default GeneralUserData;
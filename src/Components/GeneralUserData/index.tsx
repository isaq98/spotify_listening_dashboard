import { useState, useEffect } from 'react';
import { getAccessToken } from '../../Utils/SpotifyAPICalls';

function GeneralUserData() {
    const [accessToken, setAccessToken] = useState<String>('');

    useEffect(() => {
        getAccessToken();
    }, []);

    return (
        <div>Howdy</div>
    )
}

export default GeneralUserData;
import { useState, useEffect } from 'react';
import { getUsersTopItems } from '../../Utils/SpotifyAPICalls';

interface GeneralUserDataProps {
    accessToken: string;
}

function GeneralUserData({accessToken}: GeneralUserDataProps) {
    const [userTopItems, setUserTopItems] = useState<[]>([]);

    useEffect(() => {
        getUsersTopItems(accessToken).then((data) => setUserTopItems(data['items']));
    }, [])

    const renderUserCards = () => {
        return userTopItems.map((elem) => <li key={elem['name']}>{elem['name']}</li>)
    };

    return (
        <div>
            {renderUserCards()}
        </div>
    )
}

export default GeneralUserData;
import { useState, useEffect, useCallback } from 'react';
import { getUsersTopItems } from '../../Utils/SpotifyAPICalls';

function GeneralUserData() {
   const [token, setToken] = useState<string | null>('');
   const [userTopItems, setUserTopItems] = useState<[] | Promise<any>>([]);

   useEffect(() => {
    const hash = window.location.hash
    let token = window.localStorage.getItem("token")

    if (!token && hash) {
      let temp = hash.substring(1).split("&").find(elem => elem.startsWith("access_token"));
      if(temp) {
        token = temp.split("=")[1];
        window.location.hash = ""
        window.localStorage.setItem("token", token)
      }
    }
    setToken(token)
    
    if(token) {
        setUserTopItems(getUsersTopItems(token));
    }
}, [])

    const logout = () => {
        setToken("");
        window.localStorage.removeItem("token")
    }

    return (
        <div>
            {!token ?
                <a href='http://localhost:8888'>Login to Spotify</a>
            : 
                <button onClick={logout}>Logout</button>}
        </div>
    )
}

export default GeneralUserData;
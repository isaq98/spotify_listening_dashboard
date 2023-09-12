import { useEffect } from 'react';
import GeneralUserData from '../GeneralUserData';

function UserLogin() {
    
    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")
        let temp = hash.substring(1).split("&").find(elem => elem.startsWith("access_token"));
        if(temp) {
            token = temp.split("=")[1];
            window.location.hash = ""
            window.localStorage.setItem("token", token)
        }
    }, [])

    const token = window.localStorage.getItem("token");
    return (
        <div>
            {
                token ? <GeneralUserData accessToken={token}/> : <button><a href="http://localhost:8888">Login</a></button>
            }
        </div>
    )
}

export default UserLogin;
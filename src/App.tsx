import GeneralUserData from './Components/GeneralUserData';
import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';

const getTokenFromURL = () => {
  return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial: any, item) => {
      let parts = item.split('=');
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
}

function App() {
  const [token, setToken] = useState<string | null>("");
  //const [loggedIn, setLoggedIn] = useState<boolean>(false);
  useEffect(() => {
    // const spotifyToken = getTokenFromURL().access_token;
    // if(spotifyToken) {
    //   console.log('howdy')
    //   setToken(spotifyToken);
    //   setLoggedIn(true);
    // }

    const hash = window.location.hash
    let token = window.localStorage.getItem("token")

    if (!token && hash) {
      console.log(hash);
      let temp = hash.substring(1).split("&").find(elem => elem.startsWith("access_token"));
      if(temp) {
        token = temp.split("=")[1];
        window.location.hash = ""
        window.localStorage.setItem("token", token)
      }
    }
    setToken(token)
}, [])

const testFetch = async () => {
  console.log('in test: ', token);
  const requestParameters: Object = {
    method: 'GET',
    headers: {
        'Authorization': 'Bearer ' + token
    }
  };
  const res = await fetch('https://api.spotify.com/v1/me/top/tracks', requestParameters);
  const data = await res.json();
  console.log(data);
}

const logout = () => {
    setToken("");
   // setLoggedIn(false);

    window.localStorage.removeItem("token")
}

  return (
    <div className="w-full h-screen flex flex-cols text-center">
    <div className="w-1/8 bg-slate-200 h-full p-4 hidden md:flex flex-col">
      <div className="px-4">
        <img src={logo}/>
      </div>
      <div className="justify-stretch py-5 grid grid-cols-1 gap-3 my-auto">
        <div className="bg-slate-100 shadow-md rounded-md px-4 py-3">
          Tutorials
        </div>
        <div className="bg-slate-100 shadow-md rounded-md px-4 py-3">
          Components
        </div>
        <div className="bg-slate-100 shadow-md rounded-md px-4 py-3">
          Contact
        </div>
      </div>
      <div>
        FOOTER
      </div>
    </div>
    <div className="grid grid-cols-1 gap-3 w-1/2 mx-auto h-1/2">
    {!token ?
              <a href='http://localhost:8888'>Login to Spotify</a>
            : 
             <button onClick={logout}>Logout</button>}
    {token ? <button onClick={testFetch}>Click me to test a fetch</button> : <h1>Please login</h1>}
      <div className="block">
      <button className="bg-slate-100 shadow-md px-4 py-3"> Get started</button></div>
    </div>
 </div>
  );
}

export default App;

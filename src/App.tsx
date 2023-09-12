import GeneralUserData from './Components/GeneralUserData';
import UserLogin from './Components/UserLogin';
import logo from './logo.svg';
import './App.css';

function App() {
  const token = window.localStorage.getItem("token");
  return (
    <div className="w-full h-screen flex flex-cols text-center">
    <div className="grid grid-cols-1 gap-3 w-1/2 mx-auto h-1/2">
      {
        token ? <GeneralUserData accessToken={token} /> : <UserLogin />
      }
      <button className="bg-slate-100 shadow-md px-4 py-3"> Get started</button>
    </div>
 </div>
  );
}

export default App;

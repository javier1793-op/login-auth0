import logo from './logo.svg';
import './App.css';
import Login from './Components/ButtonLogin';
import {Porfolio} from './Components/Profile';
import  Logoutbutton from './Components/LogoutButton';
import {useAuth0} from '@auth0/auth0-react';


function App() {
const { isAuthenticated }= useAuth0();
  return (
    <div className="App" >
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      {isAuthenticated ? <>
       <Porfolio/>
       <Logoutbutton/>
      </> 
      : <Login/>
    }
     
      
      </header>
      
    </div>
  );
}

export default App;

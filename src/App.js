import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import username from './contexts/context';

import UserId from './components/UserId';
import Users from './components/Users';
import Home from './components/Home';
import About from './components/About';
import Page404 from './components/Page404';
import Nav from './components/Navbar';
// import NavScrollExample from './components/NavScroll';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import { useState } from 'react';
import SignedIn from './components/SignedIn';

function App() {

  const [user, setUser] = useState("Not signed in");

  return (
    <div className="App">
      <username.Provider value={{user, setUser}}>
      <Nav/>
      <BrowserRouter>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Link to="home">Home</Link>
          <Link to="login">Login</Link>
          {/* <Link to="signedIn">Login</Link> */}
          <Link to="users">Users</Link>
          <Link to="about">About Us</Link>
          {/* <Link to="404">Error</Link> */}
        </header>
        <div>
          
        </div>

        <footer className='App-footer'>
          <Routes>
            <Route path="/home" element={<Home/>} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/signedIn" element={<SignedIn/>}/>
            <Route path="/users" element={<h1><Users/></h1>} />
            <Route path="/users/:id" element={<h1><UserId/></h1>} />
            <Route path="/about" element={<h1><About/></h1>} />
            <Route path="*" element={<h1><Page404/></h1>} />
          </Routes>
        </footer>
      </BrowserRouter>
      </username.Provider>
    </div>
  );
}

export default App;

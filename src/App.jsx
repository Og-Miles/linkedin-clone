import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import { useSelector } from 'react-redux';
import { selectUser } from './features/counter/userSlice';
import Login from './Login';


function App() {
    const user = useSelector(selectUser);

  return (
    <div className="app">

        {!user ? (
          <Login /> 
          )
          : (
          <>
            <Header />
            
            <div className="app__body">
              <Sidebar />
              <Feed />
              {/* Widgets */}
            </div>
          </>

        )}
    </div>
  );
}

export default App;

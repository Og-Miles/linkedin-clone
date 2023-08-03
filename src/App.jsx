import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/counter/userSlice";
import Login from "./Login";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    // to persist the login (Basically maintain the users login status)
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // User is logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        // User is logged out
        dispatch(logout());
      }
    });
  }, []);

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        // https://imgur.com/a/qMHfduu
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

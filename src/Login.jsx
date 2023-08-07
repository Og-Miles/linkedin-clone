import "./Login.css";
import { auth } from "./firebase";
import logo from "./assets/logo.png";
import networking from "./assets/networking.png";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "./features/counter/userSlice";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayPic, setDisplayPic] = useState("");
  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch(
          login({
            email: user.email,
            uid: user.uid,
            displayName: user.displayName,
            profileUrl: user.photoURL,
          })
        );
      })
      .catch((error) => alert(error));
    // Implement login functionality here using Firebase auth.signInWithEmailAndPassword
    // You need to add code to sign in the user with the provided email and password.
    // You can handle this similarly to the register function below.
  };

  const register = () => {
    if (!name) {
      return alert("Error: Full Name Required!");
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        updateProfile(user, {
          displayName: name,
          photoURL: displayPic,
        })
          .then(() => {
            dispatch(
              login({
                email: user.email,
                uid: user.uid,
                displayName: name,
                photoURL: displayPic,
              })
            );
          })
          .catch((error) => alert("Error updating profile: " + error.message));
      })
      .catch((error) => alert("Error creating user: " + error.message));
  };

  return (
    <div className='login'>
      <div className='loginLeft'>
        <img src={networking} alt='networking' />
      </div>

      <div className='loginRight'>
        <img src={logo} alt='linkedin' />
        <form>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Full name (required if registering)'
            type='text'
          />

          <input
            value={displayPic}
            onChange={(e) => setDisplayPic(e.target.value)}
            placeholder='profile picture Url'
            type='text'
          />

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email'
            type='text'
          />

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Enter your password'
            type='password'
          />

          <button onClick={loginToApp}>Sign in</button>
        </form>
        <p>
          Not a member?
          <span className='login__register' onClick={register}>
            {" "}
            Register Now
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;

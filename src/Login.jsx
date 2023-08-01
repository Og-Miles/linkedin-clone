import './Login.css';
import { auth } from './firebase';
import logo from './assets/logo.png'
import { useState } from 'react';


function Login() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayPic, setDisplayPic] = useState('');

    const loginToApp = (e) => {
        e.preventDefault();
    }
    const register = () => {
      if (!name) {
        return alert('Error: Full Name Required!');
      }

    }
  return (
    <div className='login'>
       <img src={logo} alt="linkedin" />

        <form>

            <input 
            value={name} 
            onChange={(e) => setName(e.target.value)} placeholder='Full name (required if registered)' type="text" />

            <input value={displayPic} 
            onChange={(e) => setDisplayPic (e.target.value)} placeholder='profile picture Url' type="text" />

            <input 
            value={email} 
            onChange={(e) => setEmail (e.target.value)} placeholder='Email' type="text" />

            <input 
            value={password} 
            onChange={(e)=> setPassword(e.target.value)} placeholder='Enter your password' type="password" />

            <button>Sign in</button>

        </form>
        <p>Not a member? 

            <span className='login__register' onClick={register}> Register Now</span>
        </p>

        
    </div>
  )
}

export default Login
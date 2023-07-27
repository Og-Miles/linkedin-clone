import './Login.css';
import { auth } from './firebase';
import logo from './assets/logo.png'


function Login() {

    const loginToApp = (e) => {
        e.preventDefault();
    }
    const register = () => {

    }
  return (
    <div className='login'>
       <img src={logo} alt="linkedin" />

        <form action="">

            <input placeholder='Full name (required if registered)' type="text" />

            <input placeholder='profile picture Url' type="text" />

            <input placeholder='Email' type="text" />

            <input placeholder='Enter your password' type="password" />

            <button>Sign in</button>

        </form>
        <p>Not a member? 

            <span className='login__register'> Register Now</span>
        </p>

        
    </div>
  )
}

export default Login
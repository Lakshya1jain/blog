import {useContext, useState} from "react";
import {Navigate, Link} from "react-router-dom";
import {UserContext} from "../UserContext";

export default function LoginPage() {
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const [redirect,setRedirect] = useState(false);
  const [error, setError] = useState('');
  const {setUserInfo} = useContext(UserContext);

  async function login(ev) {
    ev.preventDefault();
    setError('');
    
    try {
      const response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        body: JSON.stringify({username, password}),
        headers: {'Content-Type':'application/json'},
        credentials: 'include',
      });
      
      if (response.ok) {
        response.json().then(userInfo => {
          setUserInfo(userInfo);
          setRedirect(true);
        });
      } else {
        setError('Invalid username or password');
      }
    } catch (e) {
      setError('Something went wrong. Please try again.');
    }
  }

  if (redirect) {
    return <Navigate to={'/'} />
  }

  return (
    <form className="login" onSubmit={login}>
      <h1>Welcome Back</h1>
      {error && <div className="form-error">{error}</div>}
      <input type="text"
             placeholder="Username"
             value={username}
             onChange={ev => setUsername(ev.target.value)}/>
      <input type="password"
             placeholder="Password"
             value={password}
             onChange={ev => setPassword(ev.target.value)}/>
      <button>Login</button>
      <div className="auth-switch">
        Don't have an account?
        <Link to="/register">Register here</Link>
      </div>
    </form>
  );
}
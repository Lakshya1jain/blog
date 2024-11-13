import {useState} from "react";
import {Link} from "react-router-dom";

export default function RegisterPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  async function register(ev) {
    ev.preventDefault();
    setError('');
    setSuccess(false);

    try {
      const response = await fetch('http://localhost:4000/register', {
        method: 'POST',
        body: JSON.stringify({username,password}),
        headers: {'Content-Type':'application/json'},
      });
      
      if (response.status === 200) {
        setSuccess(true);
        setUsername('');
        setPassword('');
      } else {
        const data = await response.json();
        setError(data.message || 'Registration failed');
      }
    } catch (e) {
      setError('Something went wrong. Please try again.');
    }
  }

  return (
    <form className="register" onSubmit={register}>
      <h1>Create Account</h1>
      {error && <div className="form-error">{error}</div>}
      {success && (
        <div className="form-success">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Registration successful! You can now login.
        </div>
      )}
      <input type="text"
             placeholder="Username"
             value={username}
             onChange={ev => setUsername(ev.target.value)}/>
      <input type="password"
             placeholder="Password"
             value={password}
             onChange={ev => setPassword(ev.target.value)}/>
      <button>Register</button>
      <div className="auth-switch">
        Already have an account?
        <Link to="/login">Login here</Link>
      </div>
    </form>
  );
}
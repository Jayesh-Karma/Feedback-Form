import { useState } from 'react';
// import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    try {
    //   const response = await axios.post('http://172.16.89.96:5000/login', { username, password });
    //   console.log(response.data.message);
      navigate(`/admin`);
    } catch (error) {
      console.error(error);
      // Handle login error
      alert('Invalid Username or Password!');
    }
  };

  return (
      <>
        <div className='container'>
          <form className='l-div' onSubmit={handleLogin}>
            <h2>Admin Login</h2>
            <label>Username:</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">
              Login
            </button>
          </form>
        </div>
      </>
  );
};

export default Login;

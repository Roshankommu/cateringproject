import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      alert('Registration successful! Please login.');
      navigate('/');
    };
  
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-md w-96 text-center">
          <h1 className="text-2xl font-bold mb-4">Catering Reservation System</h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className="p-2 border rounded" required />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="p-2 border rounded" required />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="p-2 border rounded" required />
            <button className="bg-green-600 text-white p-2 rounded hover:bg-green-700">Register</button>
            <p className="text-gray-600">Already have an account? <Link to="/" className="text-blue-500">Login</Link></p>
          </form>
        </div>
      </div>
    );
  }
  
  export default Register;
// Login.js

import React, { useState } from 'react';
// import { login } from '../services/authService'; // Importa el servicio de autenticación
import './css/Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // const token = await login(username, password); // Llama al servicio de login
      // Guardar el token en el almacenamiento local o en el contexto de autenticación
      // localStorage.setItem('authToken', token);
      // Redirecciona al usuario a la página principal o dashboard
      setError(null);
      alert('Login successful'); // Puedes redirigir aquí usando `useNavigate` de React Router
    } catch (err) {
      setError("Usuario o contraseña incorrectos. Inténtalo de nuevo.");
    }
  };

  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Nombre de usuario:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default Login;

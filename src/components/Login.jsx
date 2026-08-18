import { useState } from 'react';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const response = await fetch(`${import.meta.env.BASE_URL}users.json`);
      const users = await response.json();
      
      const user = users.find(u => u.username === username && u.password === password);
      
      if (user) {
        onLogin();
      } else {
        setError('Invalid username or password');
      }
    } catch (err) {
      setError('Error authenticating. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="login-form glass-panel" onSubmit={handleSubmit}>
      <h1 className="title">IT Portal</h1>
      <p style={{ color: '#aaa', marginBottom: '1rem' }}>Enter credentials to access character data.</p>
      
      {error && <div className="error-message">{error}</div>}
      
      <div className="input-group">
        <label htmlFor="username">Username</label>
        <input 
          id="username"
          type="text" 
          className="input-field" 
          placeholder="admin"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      
      <div className="input-group">
        <label htmlFor="password">Password</label>
        <input 
          id="password"
          type="password" 
          className="input-field" 
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      
      <button type="submit" className="btn-primary" disabled={isLoading}>
        {isLoading ? 'Authenticating...' : 'Access Terminal'}
      </button>
    </form>
  );
}

export default Login;

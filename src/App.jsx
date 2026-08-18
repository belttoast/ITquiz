import { useState, useEffect } from 'react';
import Login from './components/Login';
import CharacterInfo from './components/CharacterInfo';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user was previously logged in
    const loggedIn = localStorage.getItem('isAuthenticated');
    if (loggedIn === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
  };

  return (
    <>
      <div className="dynamic-bg"></div>
      <div className="bg-overlay"></div>
      <div className="app-container">
        {isAuthenticated ? (
          <>
            <button onClick={handleLogout} className="logout-btn">Logout</button>
            <CharacterInfo />
          </>
        ) : (
          <Login onLogin={handleLogin} />
        )}
      </div>
    </>
  );
}

export default App;

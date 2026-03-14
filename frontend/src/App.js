import { useState, useEffect } from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import BioForm from "./components/BioForm";
import BioList from "./components/BioList";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showAllForms, setShowAllForms] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    setShowAllForms(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    setShowAllForms(false);
  };

  return (
    <div className="app-root">
      <header className="app-header">
        <div className="app-brand">
          <span className="app-logo">B</span>
          <div>
            <h1 className="app-title">MERN Bio Data</h1>
            <p className="app-subtitle">Simple, fast bio records management</p>
          </div>
        </div>
        {isAuthenticated && (
          <button className="btn btn-ghost" onClick={handleLogout}>
            Logout
          </button>
        )}
      </header>

      <main className="app-main">
        {!isAuthenticated ? (
          <section className="auth-section">
            <div className="auth-card">
              <div className="auth-card-header">
                <h2>Welcome</h2>
                <p>Register a new account or log in to continue.</p>
              </div>
              <div className="auth-grid">
                <div className="auth-column">
                  <h3>Register</h3>
                  <Register />
                </div>
                <div className="auth-column">
                  <h3>Login</h3>
                  <Login onLoginSuccess={handleLoginSuccess} />
                </div>
              </div>
            </div>
          </section>
        ) : (
          <section className="dashboard-section">
            <div className="dashboard-card">
              <div className="dashboard-header">
                <h2>Bio Form</h2>
                <p>Fill in the details below and submit to save a new bio.</p>
              </div>
              <BioForm />
              <div className="dashboard-actions">
                <button
                  className="btn btn-secondary"
                  onClick={() => setShowAllForms((prev) => !prev)}
                >
                  {showAllForms ? "Hide all forms" : "Show all forms"}
                </button>
              </div>
            </div>

            {showAllForms && (
              <div className="list-card">
                <div className="list-header">
                  <h2>All Submitted Bios</h2>
                  <p>Here are all the bios you have added.</p>
                </div>
                <BioList />
              </div>
            )}
          </section>
        )}
      </main>
    </div>
  );
}

export default App;

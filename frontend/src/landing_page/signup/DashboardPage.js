import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';

const DashboardPage = () => {
  const { user, loading, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      toast.error('Please login to access this page.');
      navigate('/login');
    }
  }, [user, loading, navigate]);

  if (loading) {
    return (
      <div style={styles.loadingContainer}>
        <div style={styles.spinner}></div>
        <p style={styles.loadingText}>Verifying session...</p>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const handleGoToDashboard = () => {
    // Redirect to the Kite Dashboard app running on Port 4000
    window.location.href = 'http://localhost:4000';
  };

  const handleLogout = () => {
    logout();
    toast.success('Logged out successfully.');
    navigate('/login');
  };

  return (
    <div style={styles.container}>
      <div style={styles.glowBg}></div>
      <div style={styles.card}>
        <div style={styles.header}>
          <div style={styles.avatar}>
            {user.username ? user.username.charAt(0).toUpperCase() : 'U'}
          </div>
          <h2 style={styles.welcome}>Welcome back, {user.username}!</h2>
          <p style={styles.email}>{user.email}</p>
        </div>

        <hr style={styles.divider} />

        <div style={styles.content}>
          <p style={styles.description}>
            Your account is active and connected. You can now access your investment and trading dashboard.
          </p>

          <button
            onClick={handleGoToDashboard}
            style={styles.primaryButton}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(74, 144, 217, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(74, 144, 217, 0.2)';
            }}
          >
            Go to Kite Dashboard
          </button>

          <button
            onClick={handleLogout}
            style={styles.secondaryButton}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#edf2f7';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '75vh',
    padding: '40px 20px',
    backgroundColor: '#f7fafc',
    overflow: 'hidden'
  },
  glowBg: {
    position: 'absolute',
    top: '-10%',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '600px',
    height: '600px',
    background: 'radial-gradient(circle, rgba(66,153,225,0.15) 0%, rgba(255,255,255,0) 70%)',
    zIndex: 0,
    pointerEvents: 'none'
  },
  card: {
    position: 'relative',
    zIndex: 1,
    background: 'rgba(255, 255, 255, 0.85)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    border: '1px solid rgba(226, 232, 240, 0.8)',
    padding: '3rem 2.5rem',
    borderRadius: '16px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
    width: '100%',
    maxWidth: '450px',
    textAlign: 'center',
    animation: 'fadeIn 0.6s ease-out'
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.75rem',
    marginBottom: '1.5rem'
  },
  avatar: {
    width: '70px',
    height: '70px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #4299e1, #3182ce)',
    color: 'white',
    fontSize: '2rem',
    fontWeight: '700',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 12px rgba(49, 130, 206, 0.3)'
  },
  welcome: {
    fontSize: '1.6rem',
    color: '#2d3748',
    fontWeight: '700',
    margin: 0
  },
  email: {
    color: '#718096',
    fontSize: '0.95rem',
    margin: 0
  },
  divider: {
    border: 0,
    height: '1px',
    background: 'linear-gradient(to right, rgba(0,0,0,0), rgba(226, 232, 240, 0.8), rgba(0,0,0,0))',
    margin: '1.5rem 0'
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem'
  },
  description: {
    color: '#4a5568',
    fontSize: '0.95rem',
    lineHeight: '1.6',
    marginBottom: '1rem'
  },
  primaryButton: {
    padding: '0.85rem',
    background: 'linear-gradient(135deg, #4299e1, #3182ce)',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    boxShadow: '0 4px 15px rgba(74, 144, 217, 0.2)',
    transition: 'all 0.2s ease',
    outline: 'none'
  },
  secondaryButton: {
    padding: '0.85rem',
    background: 'transparent',
    color: '#718096',
    border: '1px solid #cbd5e0',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    outline: 'none'
  },
  loadingContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '75vh',
    gap: '1rem'
  },
  spinner: {
    width: '40px',
    height: '40px',
    border: '4px solid #e2e8f0',
    borderTop: '4px solid #3182ce',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite'
  },
  loadingText: {
    color: '#4a5568',
    fontSize: '1rem',
    fontWeight: '500'
  }
};
export default DashboardPage;

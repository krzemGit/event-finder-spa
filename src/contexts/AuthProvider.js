import React, { useState, useContext, createContext, useEffect } from 'react';
import { Alert } from 'antd';

const AuthContext = createContext()

export const useAuth = () => {
  return useContext(AuthContext)
}

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  const [alerting, setAlerting] = useState(false);

  const handleLogin = () => {
    setUser(prevUser => !prevUser)
    setAlerting(true)
  }

  const onClose = () => {
    setAlerting(false)
  }

  useEffect(() => {
    user && setAlerting(true);
  }, [user, setAlerting])

  const value = {
    user,
    handleLogin
  }

  return (
    <AuthContext.Provider value={value}>
      {alerting ? <Alert
        className="user__alert"
        message={`User has been ${user ? 'logged in!' : 'logged out!'}`}
        type="info"
        showIcon
        closable
        onClose={onClose}
      /> : null}
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
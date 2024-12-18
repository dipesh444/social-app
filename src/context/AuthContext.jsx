import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { account } from '@/lib/appwrite';
import { signIn, signOut, signUp } from '@/lib/auth';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkUser();
  }, []);

  async function checkUser() {
    try {
      const session = await account.get();
      console.log(session)
      setUser(session);
    } catch (error) {
      console.error('Check user error:', error);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleSignIn(email, password) {
    try {
      await signIn(email, password);
      await checkUser();
      navigate('/');
    } catch (error) {
      throw error;
    }
  }

  async function handleSignUp(email, password, name) {
    try {
      await signUp(email, password, name);
      await handleSignIn(email, password);
      navigate("/")
    } catch (error) {
      throw error;
    }
  }

  async function handleSignOut() {
    try {
      await signOut();
      setUser(null);
      navigate('/login');
    } catch (error) {
      console.error('Sign out error:', error);
    }
  }

  const value = {
    user,
    isLoading,
    signIn: handleSignIn,
    signUp: handleSignUp,
    signOut: handleSignOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
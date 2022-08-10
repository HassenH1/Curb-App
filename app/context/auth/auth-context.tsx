import React, {createContext, useState} from 'react';
import {IAuth} from './type';

const AuthContext = createContext<undefined | IAuth>(undefined);

const AuthProvider: React.FC = ({children}) => {
  const [isAuthenicated, setIsAuthenicated] = useState(false);
  const signIn = async () => {
    setIsAuthenicated(true);
  };
  const logout = async () => {
    setIsAuthenicated(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenicated,
        signIn,
        logout,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return context;
}
export {useAuth, AuthProvider};

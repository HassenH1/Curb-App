import React, {createContext} from 'react';
import {IUser} from './type';

const UserContext = createContext<undefined | IUser>(undefined);

const UserProvider: React.FC = ({children}) => {
  return (
    <UserContext.Provider value={undefined}>{children}</UserContext.Provider>
  );
};

function useUser() {
  const context = React.useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}
export {useUser, UserProvider};

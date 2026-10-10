import React, { createContext, useEffect, useState } from 'react'

import { users, type User } from '../data/user-mock.data';
import type { LogOut } from 'lucide-react';



/*
Alternativas para el Tipado de children en TypeScript
Opción 1: Interfaz explícita usando React.ReactNode

interface UserContextProps {
  children: React.ReactNode;
}

export const UserContextProvider = ({ children }: UserContextProps) => {
  return <>{children}</>;
};
-- fin opcion 1


Opción 2: Uso de PropsWithChildren
import React, { PropsWithChildren } from 'react';

export const UserContextProvider = ({ children }: PropsWithChildren) => {
  return <>{children}</>;
};
--fin opcion 2

Opción 3: Uso de React.FC con PropsWithChildren
import React, { FC, PropsWithChildren } from 'react';

export const UserContextProvider: FC<PropsWithChildren> = ({ children }) => {
  return <>{children}</>;
};
--fin opcion 3

*/


// Tipo para el estado de autenticación
export type AuthStatus = 'checking' | 'authenticated' | 'not-authenticated'

// Interfaz que define las propiedades y métodos del contexto
interface UserContextProps {
  // Estado
  authStatus: AuthStatus;
  user: User | null;
  isAuthenticated: boolean;

  // Métodos
login:(userId: number) => boolean;
logout: () => void;
}

// Creación del contexto usando el genérico y type assertion en TypeScript
export const UserContext = createContext<UserContextProps>({} as UserContextProps);




export const UserContextProvider = ( {children }: { children: React.ReactNode }) => {
  //Piezas de estado
  const [ authStatus, setAuthStatus ] = useState<AuthStatus>('checking');
  const [ user, setUser ] = useState<User | null>(null);


  
  const handleLogin = (userId: number) => {    
    const user = users.find( (user) => user.id === userId);    
    if (!user) {
      console.log('User not found ${userId}');
      setUser(null);
      setAuthStatus('not-authenticated');
      return false;     
    }
    
    setUser(user);
    setAuthStatus('authenticated');
    localStorage.setItem('userId', userId.toString());
    return true;
  };

  
  const handleLogout = () => {  
    setAuthStatus('not-authenticated');
    setUser(null);
    localStorage.removeItem('userId');
  };

  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');   
    if (storedUserId) {
      handleLogin(+storedUserId);
      return;
    }
    handleLogout();
  }, []); 
  return (   
    <UserContext
      value={{
        authStatus:authStatus,
        isAuthenticated: authStatus === 'authenticated',
        user: user,

        login: handleLogin,
        logout: handleLogout,
      }}
    >
      {children}
    </UserContext>
  )
};




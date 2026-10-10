import React, { createContext, useState } from 'react'

import type { User } from '../data/user-mock.data';



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
export interface UserContextProps {
  // Estado
  authStatus: AuthStatus;
  user: User | null;

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


  // Funciones / Handlers para las acciones
  const handleLogin = (userId: number): boolean => {
    console.log(userId);
    return true;
  };

  const handleLogout = (): void => {
    setAuthStatus('not-authenticated');
    setUser(null);
  };



  return (
   // Sintaxis simplificada en React 19+ (sin .Provider)
    <UserContext
      value={{
        authStatus,
        user,
        login: handleLogin,
        logout: handleLogout,
      }}
    >
      {children}
    </UserContext>
  )
}




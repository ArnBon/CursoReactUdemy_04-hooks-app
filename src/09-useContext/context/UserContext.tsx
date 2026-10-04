import React, { useState } from 'react'

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


export const UserContextProvider = ( {children }: any) => {
    const [name, setName] = useState('Arnaldo');

  return (
    <div>
        <h1>Comunicación desde UserContextProvider</h1>
        {children}
    </div>
  )
}




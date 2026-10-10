import { Link } from 'react-router';

import { UserContext } from '@/09-useContext/context/UserContext';
import { use } from 'react';
import { Button } from '@/components/ui/button';

export const AboutPage = () => {
// Extracción de valores del contexto mediante la API 'use'
const { user, isAuthenticated, logout } = use(UserContext);


  return (   
    <div className='bg-gradient flex flex-col items-center justify-center min-h-screen'>
      {isAuthenticated ? (
        <>
        <Button variant="destructive" className='mt-4' onClick={logout}>Salir</Button>
        </>
      ) : (
        <Link to="/login" className="hover:text-blue-500 underline text-2xl">
            Iniciar sesión
          </Link>
      )}
      {isAuthenticated && (
        <div>
          <h2>Perfil del usuario Activo</h2>
        </div>
      )}      
    </div>
  );  
};
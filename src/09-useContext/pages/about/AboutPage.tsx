import { Link } from 'react-router';

export const AboutPage = () => {
  return (
    <div className='bg-gradient flex flex-col items-center justify-center min-h-screen'>
      <h1 className='text-4xl font-bold'>AboutPage</h1>
      <hr />
        <div className='flex flex-2 gap-2'>
          {/* <link rel="stylesheet" href="" /> */}
          <Link to="/profile" 
          className='hover:text-blue-500 underline text-2xl'>
              Perfil de Usuario
          </Link>

          <Link to="/login" 
          className='hover:text-blue-500 underline text-2xl'>
              Iniciar Sesión
          </Link>
        </div>      
    </div>
  );
};
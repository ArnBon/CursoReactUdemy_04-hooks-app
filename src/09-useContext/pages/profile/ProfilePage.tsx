import { UserContext } from '@/09-useContext/context/UserContext';
import { Button } from '@/components/ui/button';
import { useContext } from 'react';


export const ProfilePage = () => {
  const {user} = useContext(UserContext);


  return (
    <div className="flex flex-col gap-2 items-center justify-center min-h-screen">
      <h1 className="text-4xl">ProfilePage</h1>
      
      <pre className='overflow-x-auto'>
        { JSON.stringify(user, null, 2) }
      </pre>

      <Button variant="destructive">
        Salir
      </Button>
    </div>     
  );
};

/*
Usando la API use (React 19+):
import { use } from 'react';
import { UserContext } from './context/UserContext';

export const ProfilePage = () => {
  const { user } = use(UserContext);

  return (
    <pre className="overflow-x-auto">
      {JSON.stringify(user, null, 2)}
    </pre>
  );
};


*/
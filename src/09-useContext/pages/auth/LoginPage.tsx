import { useContext, useState } from 'react';
import { UserContext } from '@/09-useContext/context/UserContext';
import { Link, useNavigate } from 'react-router';
import { toast } from 'sonner';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export const LoginPage = () => {

  const {login} = useContext(UserContext);
 const [ userId, setUserId ] = useState('');

 const navigation = useNavigate();
 
 const handledSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();

  // Conversión de string a number con el operador '+'
  const result = login(+userId);
  if (!result) {
    toast.error('Usuario no encontrado');
    return    
  }

  // Navegación en caso de éxito
  navigation('/profile');
 };

  return (
    <div className="flex flex-col items-center min-h-screen">
      <h1 className="text-4xl font-bold">LoginPage</h1>
      <hr />
      <form onSubmit={handledSubmit} 
            className="flex flex-col gap-2 my-10">
        <Input 
        type="number" 
        placeholder='Id del User' 
        value={userId }
        onChange={(event) => setUserId(event.target.value)}>          
        </Input>
        <Button type='submit'>Iniciar Sesión</Button>
      </form>

      <Link to='/about'>
      <Button variant="ghost">Volver a la página principal</Button></Link>
    </div>
  );
};

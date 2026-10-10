import { Link } from 'react-router';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useContext, useState } from 'react';
import { UserContext } from '@/09-useContext/context/UserContext';
import { toast } from 'sonner';

export const LoginPage = () => {

 const [ userId, setUserId ] = useState('');
 const {login} = useContext(UserContext);
 
 const handledSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();

  // Conversión de string a number con el operador '+'
  const result = login(+userId);
  if (!result) {
    toast.error('Usuario no encontrado');
    return    
  }

  // Navegación en caso de éxito
  navigation.navigate('/profile');
 };

  return (
    <div className="flex flex-col items-center min-h-screen">
      <h1 className="text-4xl font-bold">LoginPage</h1>
      <hr />
      <form onSubmit={handledSubmit} action="" className="flex flex-col gap-2 my-10">
        <Input 
        type="number" 
        placeholder='Id del User' 
        value={userId }
        onChange={(event) => setUserId(event.target.value)}></Input>
        <Button type='submit'>Iniciar Sesión</Button>
      </form>

      <Link to='/about'>
      <Button variant="ghost">Volver a la página principal</Button></Link>
    </div>
  );
};

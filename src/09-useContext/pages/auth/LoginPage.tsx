import { Link } from 'react-router';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export const LoginPage = () => {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <h1 className="text-4xl font-bold">LoginPage</h1>
      <hr />
      <form action="" className="flex flex-col gap-2 my-10">
        <Input type="number" placeholder='Id del User'></Input>
        <Button type='submit'>Iniciar Sesión</Button>
      </form>

      <Link to='/about'>
      <Button variant="ghost">Volver a la página principal</Button></Link>
    </div>
  );
};

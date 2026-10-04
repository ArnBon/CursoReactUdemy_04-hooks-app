import { Button } from '@/components/ui/button';


export const ProfilePage = () => {
  return (
    <div className="flex flex-col gap-2 items-center justify-center min-h-screen">
      <h1 className="text-4xl">ProfilePage</h1>
      
      <pre className='my-4'>{ JSON.stringify({}, null, 2) } </pre>

      <Button variant="destructive">
        Salir
      </Button>
    </div>     
  );
};
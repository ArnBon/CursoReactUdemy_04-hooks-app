import { appRouter } from '@/09-useContext/router/app.router'
import { RouterProvider } from 'react-router'
import { UserContextProvider } from '@/09-useContext/context/UserContext';

export const ProfessionalApp = () => {
  return (
    <UserContextProvider>
      <div className="bg-gradient flex flex-col">
      <RouterProvider router={appRouter}/>
      </div>
    </UserContextProvider>
  );
};

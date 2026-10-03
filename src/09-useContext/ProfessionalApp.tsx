import { appRouter } from '@/router/app.router'
import { RouterProvider } from 'react-router'

export const ProfessionalApp = () => {
  return (
   <RouterProvider router={appRouter}/>
  );
};

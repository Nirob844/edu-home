import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes/Routes';

function App() {
  return (
    <div className='bg-slate-100'>
      <RouterProvider router={routes}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;

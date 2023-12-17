
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './compo/All/About';
import Products from './compo/All/Products';
import Succes from './compo/All/Succes';

import Home from './compo/All/Home';
import Blog from './compo/All/Blog/Blog';
import Login from './compo/Login/Login';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/products',
    element: <Products />,
  },
  {
    path: '/success',
    element: <Succes />,
  },
  {
    path: "blog",
    element: <Blog></Blog>
  },
  {
    path:'login',
    element:<Login></Login>
  }
 
]);

function App() {
  return (
    <div id=''>
      <RouterProvider router={router}>
     
     </RouterProvider>
    </div>
  );
}

export default App;

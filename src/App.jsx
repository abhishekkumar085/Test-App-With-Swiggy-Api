import React, { lazy, Suspense, useState } from 'react';
import Body from './components/Body';
import About from './components/About';
import Header from './components/Header';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Error from './components/Error';
import Contact from './components/Contact';
import RestaurantMenu from './components/RestaurantMenu';
import LoadingSkeleton from './components/LoadingSkeleton';
// import Instamart from "./components/Instamart";
import userContext from './utils/userContext';
import { Provider } from 'react-redux';
import store from './utils/store';
import Cart from './components/Cart';

/**
 * chunking
 * code spliting
 * dynamic binding
 * Lazy loading
 * On Demand Loading
 * Dynamic Import
 *
 */

const Instamart = lazy(() => import('./components/Instamart'));
// upon On demand Loading --> upon render --> suspend loading -->
const App = () => {
  const [user, setUser] = useState({
    name: 'Dj',
    email: 'supportdj@gmail.com',
  });
  return (
    <Provider store={store}>
      <userContext.Provider value={{ user }}>
        <Header />
        <Outlet />
      </userContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Body />,
      },

      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/instamart',
        element: (
          <Suspense fallback={<LoadingSkeleton />}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: '/restaurant/:id',
        element: <RestaurantMenu />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter} />
);

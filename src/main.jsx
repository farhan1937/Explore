import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Roots from './Compunents/Roots/Roots.jsx';
import Home from './Compunents/Home/Home.jsx';
import About from './Compunents/About/About.jsx';
import Contact from './Compunents/Contact/Contact.jsx';
import Login from './Compunents/Login/Login.jsx';
import AuthProvider from './Compunents/AuthProvider/AuthProvider.jsx';
import Register from './Compunents/Register/Register.jsx';
import AllTouristsSport from './Compunents/AllTouristsSport/AllTouristsSport.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path: '/allTourists',
        element: <AllTouristsSport></AllTouristsSport>
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>

  </StrictMode>,
)

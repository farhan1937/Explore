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
import UpdateTouristsSport from './Compunents/AddTouristsSport/UpdateTouristsSport.jsx';
import AddTouristsSport from './Compunents/AddTouristsSport/AddTouristsSport.jsx';
import TouristsSportDetails from './Compunents/TouristsSprtDetails/TouristsSportDetails.jsx';
import Private from './Compunents/Private/Private.jsx';
import ErrorPage from './Compunents/ErrorPage/ErrorPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    errorElement: <ErrorPage></ErrorPage>,
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
      {
        path: '/addTourists',
        element: <AddTouristsSport></AddTouristsSport>
      },
      {
        path: '/updateTourists/:id',
        element: <UpdateTouristsSport></UpdateTouristsSport>,
        loader: ({ params }) => fetch(`http://localhost:5000/tourists/${params.id}`)
      },
      {
        path: '/sportDetails/:id',
        loader: async () => {
          const response = await fetch('/place.json'); // Ensure this path is correct
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        },
        element: <Private><TouristsSportDetails></TouristsSportDetails></Private>
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

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  BrowserRouter as Router,
  RouterProvider,
  Routes,
  Navigate,
} from "react-router-dom";
import Contact from './pages/Contact.jsx';
import About from './pages/About.jsx';
import Layout from './layout/Layout.jsx';
import Login from './components/Login.jsx';
import Main from './components/Body.jsx';
import LoginPage from './pages/LoginPage.jsx';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children: 
      [
        {
          path: "/about",
          element: <About />,
        },
        {
          path: '/login',
          element:<LoginPage /> ,
        },
        {
        path: "/contact",
        element: (
          // <AuthWrapper>
            <Contact />
          // </AuthWrapper>
        ),
      },
      {
        path: "/",
        element: <Navigate to="/login" />,
      },
    ]
},
  ] 
);


createRoot(document.getElementById('root')).render(
  <>

    {/* {isOpen && <Login setIsopen={SetIsopen}/> } */}
    {/* <Outlet/> */}
    <App/>  
    
</>
    
    // </Layout>

)

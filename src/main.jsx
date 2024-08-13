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
import { Provider } from 'react-redux';
import store, { persistor } from './store/store.js';
import { PersistGate } from 'redux-persist/integration/react';


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
          
            <Contact />
          
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

    
    <Provider store={store}>
    <App/>
    <PersistGate
        persistor={persistor}
    ></PersistGate>
    </Provider>
</>

)

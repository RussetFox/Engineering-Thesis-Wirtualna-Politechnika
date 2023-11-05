import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/index.css';
import ContactPage from './Pages/Contact-Page';
import AboutUsPage from './Pages/About-Us-Page';
import ContentPage from './Pages/Content-Page';
import EditProfile from './Pages/Edit-Profile-Page';
import MainPage from './Pages/Main-Page';
import LoginPage from './Pages/Login-Page';


import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage/>,
  },
  {
    path:'/contact',
    element: <ContactPage/>,
  },
  {
    path:'/aboutus',
    element: <AboutUsPage/>,
  },
  {
    path:'/contents',
    element: <ContentPage/>,
  },
  {
    path:'/editprofile',
    element: <EditProfile/>,
  },
  {
    path: '/login',
    element: <LoginPage isLoginChosen = {true} />,
  },
  {
    path: '/register',
    element: <LoginPage isLoginChosen = {false} />,
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <RouterProvider router={router}/>
);


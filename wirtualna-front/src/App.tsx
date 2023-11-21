import './Styles/App.css';
import './Styles/Gradient_Background.css';
import MainPage from './Pages/Main-Page'
import ContactPage from './Pages/Contact-Page';
import AboutUsPage from './Pages/About-Us-Page';
import ContentPage from './Pages/Content-Page';
import EditProfile from './Pages/Edit-Profile-Page';
import LoginPage from './Pages/Login-Page';
import RegisterPage from './Pages/Register-Page';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainPage />,
    },
    {
      path: '/contact',
      element: <ContactPage />,
    },
    {
      path: '/aboutus',
      element: <AboutUsPage />,
    },
    {
      path: '/contents',
      element: <ContentPage />,
    },
    {
      path: '/editprofile',
      element: <EditProfile />,
    },
    {
      path: '/login',
      element: <LoginPage />,
    },
    {
      path: '/register',
      element: <RegisterPage />,
    },
  ]);
  return (
    <RouterProvider router={router} />
  );
}

export default App;
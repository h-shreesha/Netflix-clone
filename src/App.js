import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';
import { AuthContextProvider } from './components/context/AuthContext';
import Home from './pages/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Account from './pages/Account';

const router = createBrowserRouter([
   
    {
        path: '/',
        element: <Home />,
        children: [
            {
                path: '/',
                element: <Main />,
            },
            {
                path: '/login',
                element: <LogIn />,
            },
            {
                path: '/signup',
                element: <SignUp />,
            },
            {
                path: '/account',
                element: <Account />,
            },
        ],
    },
]);

function App() {
    return (
        <>
            <AuthContextProvider>
                {/* <Navbar /> */}
                <RouterProvider router={router} />
            </AuthContextProvider>
        </>
    );
}

export default App;

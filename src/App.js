import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';
import { AuthContextProvider } from './components/context/AuthContext';
import Home from './pages/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        children: [
            {
                path: '/',
                element: <Main />,
            },
        ],
    },
]);

function App() {
    return (
        <>
            <AuthContextProvider>
                <Navbar />
                <RouterProvider router={router} />
            </AuthContextProvider>
        </>
    );
}

export default App;

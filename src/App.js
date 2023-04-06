import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom';

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
        <div className="App">
            <Navbar />
            <RouterProvider router={router} />
        </div>
    );
}

export default App;


import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { StreamsPage } from './pages/StreamsPage/StreamsPage';

import 'bootstrap/dist/css/bootstrap.css';
  
const router = createBrowserRouter([
    {
        path: '/*',
        element: (
            <StreamsPage></StreamsPage>
        ),
    },
    {
        path: '/',
        element: (
            <StreamsPage></StreamsPage>
        )
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<RouterProvider router={router} />);

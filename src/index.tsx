import ReactDOM from 'react-dom/client';
import React from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { StreamsPage } from './pages/StreamsPage/StreamsPage';
  
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

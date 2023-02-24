import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeOptionsContextProvider } from './components/ThemeOptionsContextProvider/ThemeOptionsContextProvider';
import { StreamsPage } from './pages/StreamsPage/StreamsPage';
import { GlobalStyles } from './styles/globalStyles';

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

export const App = () => {

    return (
        <ThemeOptionsContextProvider>
            <GlobalStyles />
            <RouterProvider router={router} />
        </ThemeOptionsContextProvider>
    );
};

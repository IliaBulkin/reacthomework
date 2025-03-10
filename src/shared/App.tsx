import { PostContextProvider } from '../context/postContext';
import { AppRoutes } from '../routes/routes';

export function App() {
    return (
        <PostContextProvider>
            <AppRoutes />
        </PostContextProvider>
    );
}

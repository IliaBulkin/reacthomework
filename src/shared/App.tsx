import { PostContextProvider } from '../context/postContext';
import { UserContextProvider } from "../context/userContext"
import { AppRoutes } from '../routes/routes';

export function App() {
    return (
        <UserContextProvider>
            <PostContextProvider>
                <AppRoutes />
            </PostContextProvider>
        </UserContextProvider>
    );
}

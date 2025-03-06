import { useTitle } from "../hooks/useTitle";
import { PostContext } from '../context/postContext';
import { AppRoutes } from '../routes/routes';

export function App() {
    // useTitle делаем для pages
    useTitle("Абоба заголовок");

    return (
        <PostContext>
            {/* div не нужен */}
            <div id="8chan">
                {/* так, это вынести в header или еще куда. К App это не относится */}
                <h1>Форум 8chan</h1>
                <p>Форум 8chan - анонимный форум, где вы можете делиться своими переживаниями, помогать другим людям, писать книги</p>
                <img src="https://m.media-amazon.com/images/I/51Dt2ljQJkS._AC_UF894,1000_QL80_.jpg" alt="no image"/>
                <h1>Список постов</h1>
                <AppRoutes />
            </div>
        </PostContext>
    );
}

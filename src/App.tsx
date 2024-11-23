import { PostList } from './PostList'

export function App() {
    return(
        <div id="8chan">
            <h1>Форум 8chan</h1>
            <p>Форум 8chan - анонимный форум, где вы можете делится своими переживаниями, помогать другим людям, писать книги</p>
            <img src="https://m.media-amazon.com/images/I/51Dt2ljQJkS._AC_UF894,1000_QL80_.jpg" alt="no image f" />

            <h1>Список постов</h1>
            <PostList></PostList>
        </div>
    )
}


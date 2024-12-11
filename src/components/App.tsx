import { PostList } from "./PostList/PostList"
import { Layout } from "./Layout/Layout"
import { Header } from "./Header/Header"
import { Footer } from "./Footer/Footer"
import { Main} from './Main/Main'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { PostPage } from "./PostPage/PostPage"

export function App(){
    return (
        <div id="8chan">
            <h1>Форум 8chan</h1>
            <p>Форум 8chan - анонимный форум, где вы можете делится своими переживаниями, помогать другим людям, писать книги</p>
            <img src="https://m.media-amazon.com/images/I/51Dt2ljQJkS._AC_UF894,1000_QL80_.jpg" alt="no image f" />

            <h1>Список постов</h1>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout></Layout>}>
                        <Route path="/PostList" element={<PostList></PostList>}></Route>
                        <Route path="/post/:id" element={<PostPage></PostPage>}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
};  
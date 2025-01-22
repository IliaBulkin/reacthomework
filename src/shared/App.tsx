import { PostList } from "./PostList/PostList";
import { Layout } from "./Layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PostPage } from "../pages/PostPage/PostPage";
import { useTitle } from "../hooks/useTitle";
import { createContext, useState } from "react";

interface ILikeContext {
    like: boolean;
    toggleLike: () => void;
}

const LikeContext = createContext<ILikeContext | null>(null);

export function App() {
    useTitle("Абоба заголовок");

    const [like, setLike] = useState(false);

    const toggleLike = () => {
        setLike((prev) => !prev);
    };


    return (
        <div id="8chan">
            <h1>Форум 8chan</h1>
            <p>Форум 8chan - анонимный форум, где вы можете делится своими переживаниями, помогать другим людям, писать книги</p>
            <img src="https://m.media-amazon.com/images/I/51Dt2ljQJkS._AC_UF894,1000_QL80_.jpg" alt="no image f"/>

            <h1>Список постов</h1>
            <LikeContext.Provider value={{ like, toggleLike }}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Layout></Layout>}>
                            <Route path="/PostList" element={<PostList></PostList>}></Route>
                            <Route path="/PostList/:id" element={<PostPage></PostPage>}></Route>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </LikeContext.Provider>
        </div>
    );
}

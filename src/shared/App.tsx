import { PostList } from "./PostList/PostList";
import { Layout } from "./Layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PostPage } from "../pages/PostPage/PostPage";
import { useTitle } from "../hooks/useTitle";
import { createContext, useState } from "react";

export interface IPostProps {
    id: number
    header: string
    description: string
    social_image: string
    author: string
    category: string
    title: string   
    content: string   
    date: string   
}

interface ILikeContext {
    likedPosts: IPostProps[]; 
    toggleLike: (post: IPostProps) => void; 
}

export const LikeContext = createContext<ILikeContext | null>(null);

export function App() {
    useTitle("Абоба заголовок");

    const [likedPosts, setLikedPosts] = useState<IPostProps[]>([]); 

    const toggleLike = (post: IPostProps) => {
        setLikedPosts((prev) => {
            const isLiked = prev.some((likedPost) => likedPost.id === post.id); 
            if (isLiked) {
                return prev.filter((likedPost) => likedPost.id !== post.id); 
            } else {
                return [...prev, post];
            }
        });
    };

    return (
        <div id="8chan">
            <h1>Форум 8chan</h1>
            <p>Форум 8chan - анонимный форум, где вы можете делиться своими переживаниями, помогать другим людям, писать книги</p>
            <img
                src="https://m.media-amazon.com/images/I/51Dt2ljQJkS._AC_UF894,1000_QL80_.jpg"
                alt="no image"
            />

            <h1>Список постов</h1>
            <LikeContext.Provider value={{ likedPosts, toggleLike }}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route path="/PostList" element={<PostList />} />
                            <Route path="/PostList/:id" element={<PostPage />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </LikeContext.Provider>
        </div>
    );
}

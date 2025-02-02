import { PostPage } from "../pages/PostPage/PostPage";
import { useTitle } from "../hooks/useTitle";
import { PostList } from "../shared/PostList/PostList";
import { Layout } from "../shared/Layout/Layout";
import { LikedPosts } from '../pages/LikedPostPage/LikedPostPage'

import { BrowserRouter, Routes, Route } from "react-router-dom";

export function AppRoutes() {
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/PostList" element={<PostList />} />
                <Route path="/PostList/:id" element={<PostPage />} />
                <Route path="/likedPosts" element={<LikedPosts />} />
            </Route>
        </Routes>
    </BrowserRouter>
    )
}
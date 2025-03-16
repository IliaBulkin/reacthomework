import { PostPage } from "../pages/PostPage/PostPage";
import { PostList } from "../shared/PostList/PostList";
import { Layout } from "../shared/Layout/Layout";
import { LikedPosts } from '../pages/LikedPostPage/LikedPostPage'
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { RegisterPage } from "../pages/RegisterPage/RegisterPage"
import { PostListPage } from "../pages/PostListPage/PostListPage"
import { UserPage } from "../pages/UserPage/UserPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export function AppRoutes() {
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/PostList" element={<PostList />} />
                <Route path="/PostList/:id" element={<PostPage />} />
                <Route path="/PostListPage" element={<PostListPage />} />
                <Route path="/likedPosts" element={<LikedPosts />} />
                <Route path='/login' element={<LoginPage></LoginPage>}></Route>
                <Route path='/register' element={<RegisterPage></RegisterPage>}></Route>
                <Route path="/user" element={<UserPage></UserPage>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
    )
}
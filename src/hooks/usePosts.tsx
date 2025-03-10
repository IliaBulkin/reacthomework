import { useState, useEffect } from "react";
import { IPostProps } from "../shared/PostList/PostCard/Post";

export function usePosts() {
    const [posts, setPosts] = useState<IPostProps[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>()

    useEffect(() => {
        async function fetchPosts() {
            try {
                const apiPosts = await fetch("http://localhost:8000/api/post/all");
                const response = await apiPosts.json();

                const transformedApiPosts = response.map((post: any) => ({
                    id: post.id,
                    header: post.title,
                    description: post.description,
                    social_image: post.social_image,
                    author: post.user.name,
                    category: post.id
                }));
                
                setPosts([transformedApiPosts]);
                
            } catch {
                setError(`${error}`)
            } finally {
                setIsLoading(true)
            }
        }

        fetchPosts();
    }, []);

    return { posts };
}

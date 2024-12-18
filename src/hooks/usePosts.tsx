import { useState, useEffect } from "react";
import { IPostProps } from "../pages/PostsPage/Post/Post";

export function usePosts() {
    const [posts, setPosts] = useState<IPostProps[]>([]);

    useEffect(() => {
        async function fetchPosts() {
            const staticPosts: IPostProps[] = [
                {
                    id: 1,
                    header: "Как заработать денег в 14 лет?",
                    description: "В этой посте мы разберем, как заработать свои первые деньги в 14 лет.",
                    social_image:
                        "https://st.depositphotos.com/1010237/53285/i/450/depositphotos_532856084-stock-photo-child-money-young-boy-holding.jpg",
                    author: "Инфоцыган",
                    category: "Money",
                },
                {
                    id: 2,
                    header: "В чем смысл твоей жизни?",
                    description: "В этой посте мы разберем, в чем же заключется смысл жизни.",
                    social_image:
                        "https://i.pinimg.com/236x/d2/c0/c0/d2c0c09aed5bc55707b80ac65acb20ad.jpg",
                    author: "Психолог Ренат",
                    category: "Psychology",
                },
                {
                    id: 3,
                    header: "Зачем писать конспект?",
                    description: "Чтобы не тупить, и не использовать чат гпт, тему можно закрывать.",
                    social_image:
                        "https://i.ytimg.com/vi/zULR2LTOzk8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBbJaq9u3BZ967M4LJ6wBa7_2IBCw",
                    author: "Тролль",
                    category: "Rofls",
                }
            ];

            try {
                const apiPosts = await fetch("https://dev.to/api/articles");
                const response = await apiPosts.json();

                const transformedApiPosts = response.map((post: any) => ({
                    id: post.id,
                    header: post.title,
                    description: post.description,
                    social_image: post.social_image,
                    author: post.user.name,
                    category: post.id
                }));
                // короче честно хз что это, писал видимо под наркотиками, но как я понял, тут мы объединяем два массива в один
                setPosts([...staticPosts, ...transformedApiPosts]);
            } catch {
                setPosts(staticPosts);
            }
        }

        fetchPosts();
    }, []);

    return { posts };
}
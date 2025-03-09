import { Post } from "../PostList/PostCard/Post";
import { usePosts } from "../../hooks/usePosts";
import { useEffect, useState } from "react";

export function PostList() {
    const { posts } = usePosts(); 
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [filteredProducts, setFilteredProducts] = useState(posts);

    useEffect(() => {
        setFilteredProducts(
            selectedCategory === "All"
                ? posts
                : posts.filter((post) => post.category === selectedCategory)
        );
    }, [selectedCategory, posts]);

    return (
        <div>
            <select onChange={(event) => setSelectedCategory(event.target.value)}>
                <option value="All">Все посты</option>
                <option value="Money">Деньги</option>
                <option value="Psychology">Психология</option>
                <option value="Rofls">Шутки</option>
            </select>

            {filteredProducts.map((post) => (
                <Post
                    id={post.id}
                    header={post.header}
                    description={post.description}
                    social_image={post.social_image}
                    author={post.author}
                    category={post.category}
                    title={post.title}
                    content={post.content}
                    date={post.date}
                />
            ))}
        </div>
    );
}

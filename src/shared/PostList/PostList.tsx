import { Post } from "../PostList/PostCard/Post";
import { usePosts } from "../../hooks/usePosts";
import { useState } from "react";

export function PostList() {
    const { posts } = usePosts(); 
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredProducts = selectedCategory === "All"
        ? posts
        : posts.filter((post) => post.category === selectedCategory);

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
                    key={post.id}
                    id={post.id}
                    header={post.header}
                    description={post.description}
                    social_image={post.social_image}
                    author={post.author}
                    category={post.category}
                />
            ))}
        </div>
    );
}

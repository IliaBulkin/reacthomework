import { Post } from "../PostList/PostCard/Post";
import { usePosts } from "../../hooks/usePosts";
import { useEffect, useState } from "react";
import { useTags } from "../../hooks/useTags"

export function PostList() {
    const { posts } = usePosts(); 
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [filteredProducts, setFilteredProducts] = useState(posts);
    const { tags } = useTags();

    useEffect(() => {
        setFilteredProducts(
            selectedCategory === "All"
                ? posts
                : posts.filter((post) => post.category === selectedCategory)
        );
    }, [selectedCategory, posts]);

    return (
        <div>
            <select
                name="tags"
                id="mainselect"
                onChange={(event) => setSelectedCategory(event.target.value)}
                value={selectedCategory}
            >
                <option value="All">All</option>
                {tags.map((tag) => (
                    <option key={tag.name} value={tag.name}>
                        {tag.name}
                    </option>
                ))}
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

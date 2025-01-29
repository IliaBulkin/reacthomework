import { useParams } from "react-router-dom"
import "./PostPage.css"
import { useEffect, useState } from "react"
import { usePosts } from "../../hooks/usePosts"

export function PostPage() {
    const [post, setPost] = useState({
        id: 0,
        title: "",
        cover_image: "",
        tags: [""],
        body_markdown: "",
    })
    const params = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const { posts } = usePosts()

    useEffect(() => {
        async function getAllPosts() {
            setIsLoading(true)
            const response = await fetch(`https://dev.to/api/articles/${params.id}`)
            const post = await response.json()
            setPost(post)
            setIsLoading(false)
        }
        getAllPosts()
    }, [params.id])

    return (
        <div id="PostPage">
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <div>
                    <div id="titleOfPostDiv">
                        <h1 id="titleOfPost">title: {post.title}</h1>
                    </div>
                    <div id="imageOfPostDiv">
                        <img id="imageOfPost" src={post.cover_image} alt="imageOfPostError" />
                    </div>
                    <div id="tagsOfPost">
                        <h2 id="tagsTitle">tags:</h2>
                        {post.tags.map((tag, index) => {
                            return <p key={index}>{tag}</p>; // проблема с ключем, ручные посты не загружаются, ошибка маппинга
                        })}
                    </div>
                    <div id="bodyMarkdown">
                        <h2 id="bodyMarkdownTitle">body markdown:</h2>
                        <p id="bodyMarkdownText">{post.body_markdown}</p>
                    </div>
                </div>
            )}
        </div>
    )
}
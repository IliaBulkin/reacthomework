import { useContext } from "react"
import { LikeContext } from "../../context/postContext"
import { IPostProps } from "../../context/postContext"

export function LikedPosts() {
    // toggleLike не используешь
    const { likedPosts, toggleLike } = useContext(LikeContext)!
    return (
        <div>
            {likedPosts.map((post: IPostProps) => { 
                return (
                    <div key={post.id}>
                        <h1>{post.title}</h1>
                        <p>{post.description}</p>
                        <img src={post.social_image} alt="" />
                    </div>
                )
            })}
        </div>
    );
}

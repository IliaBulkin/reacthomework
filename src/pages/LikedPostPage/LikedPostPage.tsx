import { useContext } from "react"
import { LikeContext } from "../../context/postContext"
import { IPostProps } from "../../shared/types/types";

export function LikedPosts() {
    const { likedPosts } = useContext(LikeContext)!
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

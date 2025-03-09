import { createContext, useState, ReactNode } from "react"
import { IPostProps, ILikeContext } from "../shared/types/types"

export const LikeContext = createContext<ILikeContext | null>(null)

export function PostContextProvider({ children }: { children: ReactNode }) {
    const [likedPosts, setLikedPosts] = useState<IPostProps[]>([])

    const toggleLike = (post: IPostProps) => {
        setLikedPosts((prevLikedPosts) => {
            const isLiked = prevLikedPosts.some((likedPost) => likedPost.id === post.id)
            if (isLiked) {
                return prevLikedPosts.filter((likedPost) => likedPost.id !== post.id)
            } else {
                return [...prevLikedPosts, post]
            }
        })
    }
    
    return (
        <LikeContext.Provider value={{ likedPosts, toggleLike }}>
            {children}
        </LikeContext.Provider>
    )
}
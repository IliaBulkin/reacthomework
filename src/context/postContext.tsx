import React, { createContext, useState, ReactNode } from "react"

export interface IPostProps {
    id: number
    header: string
    description: string
    social_image: string
    author: string
    category: string
    title: string   
    content: string   
    date: string
}

export interface ILikeContext {
    likedPosts: IPostProps[]
    toggleLike: (post: IPostProps) => void
}

export const LikeContext = createContext<ILikeContext | null>(null)

export function PostContext({ children }: { children: ReactNode }) {
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
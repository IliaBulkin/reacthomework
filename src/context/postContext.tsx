// React не импортируем
import React, { createContext, useState, ReactNode } from "react"

// За Названиями переменных контекста следи, где то LikeContext, где то PostContext

// это не Props, и интерфейс поста лучше брать из types
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
// Экспортировать контекст не надо
export const LikeContext = createContext<ILikeContext | null>(null)
// Лучше сделать хук, который будет возвращать useContext(LikeContext)

// Это провайдер
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
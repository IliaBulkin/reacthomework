import { useEffect, useState } from "react";

export interface IPost{
    id: number,
    name: string,
    author: string,
    description: string,
    time: string,
    comment: [],
    userId: number
}

export function usePostById(id: number){
    let [receivedPost, setReceivedPost] = useState<IPost>();
    let [isLoading, setIsLoading] = useState<boolean>(false);
    let [error, setError] = useState<string>();
    useEffect(() => {
        async function getArticleById(){
            try{
                setIsLoading(true);
                const response = await fetch(`https://dev.to/api/articles/${id}`);
                const result = await response.json();
                if (result.status == "success"){
                    setReceivedPost(result.data);
                } else{
                    setError(result.message)
                }
            } catch (error){
                const err = error instanceof Error ? error.message : undefined;
                setError(`${err}`);
            } finally{
                setIsLoading(false);
            }
        }
        getArticleById();
    }, [id])
    return {post: receivedPost, isLoading: isLoading, error: error};
}
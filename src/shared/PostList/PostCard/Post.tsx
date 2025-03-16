import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { LikeContext } from "../../../context/postContext"

export interface IComment{
    id: number;
    title: string;
    body: string;
    userId: number;
    postId: number;
}

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
    comments?: IComment[]
}

export function useToggleLike() {
    const [like, setLike] = useState(false);
    const [likePhoto, setLikePhoto] = useState(
        "https://icons.veryicon.com/png/o/commerce-shopping/evaluation-interface-of-sanfu-official-mall/icon-like-2.png"
    );

    const toggleLike = () => {
        setLike((prevLike) => !prevLike);

        if (like === false) {
            setLikePhoto(
                "https://icons.veryicon.com/png/o/miscellaneous/yuanql/icon-like.png"
            );
        } else {
            setLikePhoto(
                "https://icons.veryicon.com/png/o/commerce-shopping/evaluation-interface-of-sanfu-official-mall/icon-like-2.png"
            );
        }
    };

    return { likePhoto, toggleLike };
}

export function Post(props: IPostProps) {
    const { likedPosts, toggleLike } = useContext(LikeContext)!
    
    return (
        <div id="post">
            <br />
            <hr />
            <Link className="post" to={`/PostList/${props.id}`}>
                <h1>{props.header}</h1>
                <p>{props.description}</p>
                <img src={props.social_image} alt="props.image" />
                <p>{props.author}</p>
            </Link>
            <button onClick={() => toggleLike(props)}>
                <img 
                    src="https://icons.veryicon.com/png/o/miscellaneous/yuanql/icon-like.png" 
                    alt="like"
                />
            </button>
            <hr />
        </div>
    );
}

import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { LikeContext } from "../../App"; 

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

export function Post(props: IPostProps) {
    // без ! будет ругаться на возможный null
    const { likedPosts, toggleLike } = useContext(LikeContext)!

    const isLiked = likedPosts.some((post) => post.id === props.id);

    const imgStyles = {
        width: "30px",
    }
    const buttonStyles = {
        border: "0px",
    }

    const handleLikeClick = () => {
        toggleLike(props); 
    };

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
            <button style={buttonStyles} id="likeButton" onClick={handleLikeClick}>
                <img style={imgStyles} src={
                        isLiked ? "https://icons.veryicon.com/png/o/miscellaneous/yuanql/icon-like.png" 
                        : "https://icons.veryicon.com/png/o/commerce-shopping/evaluation-interface-of-sanfu-official-mall/icon-like-2.png"
                    } alt="like no yoo" />
            </button>
            <hr />
        </div>
    );
}

import { useState } from "react";
import { Link } from "react-router-dom";
import { usePostById } from "../../../hooks/usePostById";

export interface IPostProps {
    id: number;
    header: string;
    description: string;
    social_image: string;
    author: string;
    category: string;
}

export function Post(props: IPostProps) {
    const { likePhoto, toggleLike } = usePostById();

    const imgStyles = {
        width: "30px",
    };
    const buttonStyles = {
        border: "0px",
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
            <button style={buttonStyles} id="likeButton" onClick={toggleLike}>
                <img style={imgStyles} src={likePhoto} alt="like no yoo" />
            </button>
            <hr />
        </div>
    );
}

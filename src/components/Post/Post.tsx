import { useState } from "react"

export interface IPostProps {
    header: string,
    description: string, 
    image: string,
    author: string,
    category: string
}

export function Post(props: IPostProps) {
    // const [likeRep, setLikeRep] = useState(0)

    const [like, setLike] = useState(false)
    const [likePhoto, setLikePhoto] = useState('https://icons.veryicon.com/png/o/commerce-shopping/evaluation-interface-of-sanfu-official-mall/icon-like-2.png')
    function likeyoo() {
        if (like == false) {
            setLike(true)
            setLikePhoto('https://icons.veryicon.com/png/o/miscellaneous/yuanql/icon-like.png')
            console.log('like true')
        }
        if (like == true) {
            setLike(false)
            setLikePhoto('https://icons.veryicon.com/png/o/commerce-shopping/evaluation-interface-of-sanfu-official-mall/icon-like-2.png')
            console.log('like false')
        }
    }


    // function likeTrue() {
    //     if (likeRep == 0 && likeRep <= 1) {
    //         setLikeRep(likeRep+1)
    //     }
    // }

    // function likeFalse() {
    //     if (likeRep == 1) {
    //         setLikeRep(likeRep-1)
    //     }
    // }


    const imgStyles = {
        width: "30px"
      };
    const buttonStyles = {
        border: "0px"
    }
    return (
        <div id="post">
            <h1>{props.header}</h1>
            <p>{props.description}</p>
            <img src={props.image} alt="props.image" />
            <p>{props.author}</p>

            <button style={buttonStyles} id="likeButton" onClick={likeyoo}><img style={imgStyles} src={likePhoto} alt="like no yoo"/></button>

            {/* <h3>test like {likeRep}</h3>
            <button onClick={likeTrue}>+repLike</button>
            <button onClick={likeFalse}>-repLike</button> */}

        </div>
    )
}
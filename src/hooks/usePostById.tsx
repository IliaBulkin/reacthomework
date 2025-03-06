import { useState } from "react";
// ничего не понял
// usePostById занимается черт пойми чем
export function usePostById() {
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
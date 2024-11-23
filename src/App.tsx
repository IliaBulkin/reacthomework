import { Post } from "./Post"
import { IPostProps } from "./Post"

export function App() {
    return(
        <div id="8chan">
            <h1>Форум 8chan</h1>
            <p>Форум 8chan - анонимный форум, где вы можете делится своими переживаниями, помогать другим людям, писать книги</p>
            <img src="https://m.media-amazon.com/images/I/51Dt2ljQJkS._AC_UF894,1000_QL80_.jpg" alt="no image f" />

            <h1>Список постов</h1>
            <PostList></PostList>
        </div>
    )
}

export function PostList() {
    const posts: IPostProps[] = [
        {header: 'Как заработать денег в 14 лет?',
        description: "В этой посте мы разберем, как заработать свои первые деньги в 14 лет.", 
        image: "https://st.depositphotos.com/1010237/53285/i/450/depositphotos_532856084-stock-photo-child-money-young-boy-holding.jpg",
        author: "Инфоцыган"},

        {header: 'В чем смысл твоей жизни?',
        description: "В этой посте мы разберем, в чем же заключется смысл жизни, как понять, кем стать в этой жизни?", 
        image: "https://i.pinimg.com/236x/d2/c0/c0/d2c0c09aed5bc55707b80ac65acb20ad.jpg",
        author: "Психолог Ренат"},

        {header: 'Зачем писать конспект?',
        description: "Чтобы не тупить, и не использовать чат гпт, тему можно закрывать", 
        image: "https://i.ytimg.com/vi/zULR2LTOzk8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBbJaq9u3BZ967M4LJ6wBa7_2IBCw",
        author: "Тролль"}
    ]
    return (
        <div>
            {posts.map((post) => {
            return (<Post header={post.header} description={post.description} image={post.image} author={post.author}></Post>)
        })}
        </div>
        
    )
}
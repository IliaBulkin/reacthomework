import { Post } from "../Post/Post"
import { IPostProps } from "../Post/Post"
import { useEffect, useState } from "react"

export function PostList() {
    // список с постами
    const posts: IPostProps[] = [
        {id: 1,
            header: 'Как заработать денег в 14 лет?',
            description: "В этой посте мы разберем, как заработать свои первые деньги в 14 лет.", 
            social_image: "https://st.depositphotos.com/1010237/53285/i/450/depositphotos_532856084-stock-photo-child-money-young-boy-holding.jpg",
            author: "Инфоцыган",
            category: 'Money'
        },
        {
            id: 2,
            header: 'В чем смысл твоей жизни?',
            description: "В этой посте мы разберем, в чем же заключется смысл жизни, как понять, кем стать в этой жизни?", 
            social_image: "https://i.pinimg.com/236x/d2/c0/c0/d2c0c09aed5bc55707b80ac65acb20ad.jpg",
            author: "Психолог Ренат",
            category: 'Psychology'
        },
        {
            id: 3,
            header: 'Зачем писать конспект?',
            description: "Чтобы не тупить, и не использовать чат гпт, тему можно закрывать", 
            social_image: "https://i.ytimg.com/vi/zULR2LTOzk8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBbJaq9u3BZ967M4LJ6wBa7_2IBCw",
            author: "Тролль",
            category: 'Rofls'
        }
    ]

    const [filteredProducts, setFilteredPosts] = useState(posts)
    const [selectedCategory, setSelectedCategory] = useState('All')
    // используем хук юзЕффект для отслеживания изминения категории, если категория не Олл, то фильтруем посты по ранее заданным категориям
    useEffect(()=>{
        if(selectedCategory === 'All'){
            setFilteredPosts(posts)
        } else{
            setFilteredPosts(posts.filter((post)=>{
                return post.category === selectedCategory
            }))
        }
        console.log(selectedCategory)
    }, [selectedCategory])

    useEffect(()=>{
        async function getPosts(){
            const response = await fetch('https://dev.to/api/articles')
            const posts = await response.json()
            setFilteredPosts(posts)
        }
        getPosts()
    },[])

    return (
        // селект, который всё делает уоо
        <div>
            <select onChange={(event)=>{setSelectedCategory(event.target.value)}}>
                <option value="All">Все посты</option>
                <option value="Money">Деньги</option>
                <option value="Psychology">Психология</option>
                <option value="Rofls">Шутки</option>
            </select>
            {/* возвращаем фильтрованные продукты */}
            {filteredProducts.map((post) => {
            return (<Post key={post.id} id={post.id} header={post.header} description={post.description} social_image={post.social_image} author={post.author} category={post.category}></Post>)
        })}
        </div>
        
    )
}
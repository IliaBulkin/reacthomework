export interface IPostProps {
    header: string,
    description: string, 
    image: string,
    author: string
}

export function Post(props: IPostProps) {
    return (
        <div id="post">
            <h1>{props.header}</h1>
            <p>{props.description}</p>
            <img src={props.image} alt="props.image" />
            <p>{props.author}</p>
        </div>
    )
}
import "./Header.css"
import { Link } from "react-router-dom";

export function Header(){
    return (
        <header>
            <h1>8chan</h1>
            <Link to={"/"}>
            <button>Main page</button>
            </Link>

            <Link to={"/PostList"}>
            <button>New posts</button>
            </Link>
        </header>
    )
}
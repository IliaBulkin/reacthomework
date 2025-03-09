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

            <div id="8chan">
                <h1>Форум 8chan</h1>
                <p>Форум 8chan - анонимный форум, где вы можете делиться своими переживаниями, помогать другим людям, писать книги</p>
                <img src="https://m.media-amazon.com/images/I/51Dt2ljQJkS._AC_UF894,1000_QL80_.jpg" alt="no image"/>
                <h1>Список постов</h1>
            </div>
        </header>
    )
}
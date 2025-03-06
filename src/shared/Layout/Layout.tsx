import { ReactNode } from "react"
import { Header } from "../Header/Header"
import { Main } from "../Main/Main"
// Импорт не используется, нужно убрать
import { PostList } from "../PostList/PostList"
import { Footer } from "../Footer/Footer"
import { Outlet } from "react-router-dom"
// props не используем
interface ILayoutProps {
    children?: ReactNode
}
// props Здесь это не надо
export function Layout(props: ILayoutProps){
    return (
        <div className="layout">
            <Header></Header>
            <Main>
                <Outlet />
            </Main>
            <Footer></Footer>
        </div>
    )
}
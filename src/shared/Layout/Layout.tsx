import { ReactNode } from "react"
import { Header } from "../Header/Header"
import { Main } from "../../pages/MainPage/Main/Main"
import { PostList } from "../../pages/MainPage/PostList/PostList"
import { Footer } from "../Footer/Footer"
import { Outlet } from "react-router-dom"

interface ILayoutProps {
    children?: ReactNode
}

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
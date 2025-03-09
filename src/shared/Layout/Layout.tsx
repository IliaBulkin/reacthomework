import { Header } from "../Header/Header"
import { Footer } from "../Footer/Footer"
import { Outlet } from "react-router-dom"
import { MainPageComponent } from "../MainPage/MainPageComponent"

export function Layout(){
    return (
        <div className="layout">
            <Header></Header>
            <MainPageComponent>
                <Outlet />
            </MainPageComponent>
            <Footer></Footer>
        </div>
    )
}
import { useTitle } from "../../hooks/useTitle"
import { MainPageComponent } from "../../shared/MainPage/MainPageComponent"

export function Main() {
    useTitle('mainPage');

    return (
        <MainPageComponent></MainPageComponent>
    )
}
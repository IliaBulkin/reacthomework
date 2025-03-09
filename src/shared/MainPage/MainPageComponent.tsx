import { ReactNode } from "react"

interface IMainProps {
    children?: ReactNode
}

export function MainPageComponent(props: IMainProps) {
    // useTitle
    return (
        <div className = "Main">
            {props.children}
            <h1>абоба хуК</h1>
        </div>
    )
}


import { ReactNode } from "react"

interface IMainProps {
    children?: ReactNode
}

export function Main(props: IMainProps) {
    return (
        <div className = "Main">
            {props.children}
            <h1>абоба хуК</h1>
        </div>
    )
}
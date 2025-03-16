import { ReactNode } from "react"
import { useUserContext } from '../../context/userContext';
import { Link } from "react-router-dom";

interface IMainProps {
    children?: ReactNode
}

export function MainPageComponent(props: IMainProps) {
    // useTitle
    const { isAuth } = useUserContext()

    return (
        <div className = "Main">
            {props.children}
            <h1>абоба хуК</h1>

            { !isAuth ? 
            <div className="header-auth">
                <Link to={"/login"}><button>login</button></Link> 
                <Link to={"/reg"}><button>registration</button></Link> 
            </div>
            : 
            <Link to={"/user"}><button>profile</button></Link> 
            }
        </div>
    )
}


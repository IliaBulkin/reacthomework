import { useUserContext } from "../../context/userContext"
import './UserPage.css'

export function UserPage(){
    const {user, logout} = useUserContext()
    
    return (
        <div>
            {
                user ? (
                    <div>
                        <h1>username: {user.username}</h1>
                        <h1>email: {user.email}</h1>
                        <button onClick={logout}>Logout</button>
                    </div>
                ) : (
                    <h1>please login for view your profile yoo</h1>
                )
            }
        </div>
    )
}
import { useAuth } from "../../context/AuthProvider/useAuth"
import {Link} from 'react-router-dom'
import './accessDenied.css'

export const ProtectedRoutes =({children}: {children: JSX.Element})=>{
    const auth = useAuth()

    if(!auth.token){
        return (
           <div className="denied-error">
            <h1>403</h1>
            <h2>Acesso Negado !</h2>
            <p>Você precisa estar logado para acessar essa página.</p>
            <Link to='/Login'>Fazer Login</Link>
           </div>
        )
    }

    return children
}
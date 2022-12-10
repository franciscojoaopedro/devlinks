import "./header.css"
import {BiLogOut} from "react-icons/bi"

import { Link } from "react-router-dom"
import {auth} from "../../services/firebaseConnection"
import {signOut} from "firebase/auth"

const Header=()=>{

    const hendleLogOut= async () =>{
        await signOut(auth)
    }

    return (
        <header className="admin-header">
          
          <nav className="nav-header">
            <button onClick={hendleLogOut} >
                <BiLogOut  size={30} color="#db2629"/>
            </button>
          <Link to={"/admin"} >
            LINKS
          </Link>

          <Link to={"/admin/social"} >
            Redes Socias
          </Link>
          </nav>
        </header>
    )
}
export {Header}
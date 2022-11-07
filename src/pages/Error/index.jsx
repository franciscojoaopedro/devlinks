import "./erro.css"
import { Link } from "react-router-dom";
import { Logo } from "../../components/Logo";


const Error=()=>{
    return(
        <div className="error">
            <Logo/>
            <h1>Pagina não encontrada!</h1>
            <h2>Esta pagina que está procurando não exite!</h2>

            <Link className="link" to={"/"}>
            Voltar Para Home
            </Link>
        </div>
    )
}

export default Error;
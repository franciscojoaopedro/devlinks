import { useState } from "react";

import "./login.css"
import { Logo } from "../../components/Logo";
import { auth } from "../../services/firebaseConnection";
import {signInWithEmailAndPassword} from "firebase/auth"
import {useNavigate} from "react-router-dom"

import {toast} from "react-toastify"

const Login=()=>{
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    const navigate=useNavigate()

    const handeLogin=(event)=>{
        event.preventDefault()
        if(email==="" || password===""){
            return alert("Preencha todos os campaos!")
        }
        signInWithEmailAndPassword(auth,email,password)
        .then(()=>{
            navigate("/admin",{replace:true})
            toast.success("Bem vindo de volta!")
        })
        .catch(()=>{
            toast.error("Erro ao tentar fazer login!")
        })
       console.log({email:email,password:password})
    }
    return(
        <div className="login-container">
            <Logo/>
            <form className="form" onSubmit={handeLogin}>
                <input
                type={"email"}
                placeholder="Digite o seu email..."
                value={email}
                onChange={(event)=>setEmail(event.target.value)}
                />
                <input
                type={"password"}
                placeholder="************"
                autoComplete="on"
                value={password}
                onChange={(event)=>setPassword(event.target.value)}
                />
                
                <button type="submit">Acessar</button>
            </form>
        </div>
    )
}

export default Login;
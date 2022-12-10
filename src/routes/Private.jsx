import { useState,useEffect } from "react"
import { auth } from "../services/firebaseConnection"
import { onAuthStateChanged } from "firebase/auth"
import { Navigate } from "react-router-dom"



const Private=({children})=>{

    const [loading,setLoanding]=useState(true)
    const [signed,setSigned]=useState(false)

    useEffect(()=>{
        async function checkLogin(){
            const unsub=onAuthStateChanged(auth,(user)=>{
                if(user){
                    const userData={
                        uid:user.uid,
                        email:user.email
                    }
                    localStorage.setItem("@detailUser",JSON.stringify(userData))
                    setLoanding(false)
                    setSigned(true)
                }else{
                    setLoanding(false);
                    setSigned(false)
                }
            })
        }

        checkLogin()
    },[])

    if(loading){
        return (
            <div></div>
        )
    }
    if(!signed){
        return <Navigate
        to={"/login"}
        />
    }
    return children
}

export default Private
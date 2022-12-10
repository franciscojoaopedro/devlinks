import { useState,useEffect } from "react"

import "./networks.css"
import {Header} from "../../components/Header"
import {Input} from "../../components/Input"
import {MdAddLink} from "react-icons/md"
import { db } from "../../services/firebaseConnection"
import {setDoc,doc,getDoc} from "firebase/firestore"
import { toast } from 'react-toastify';
const   Social=()=>{
    const [facebook,setFacebook]=useState("")
    const [instagram,setInstagram]=useState("")
    const [youtube,setYoutube]=useState("")

    async function handleSave(e){
        e.preventDefault();
      await  setDoc(doc(db,"social","link"),{
            facebook:facebook,
            instagram:instagram,
            youtube:youtube
        })
        .then(()=>toast.success("url salvas com sucesso"))
        .catch((error)=>{
            toast.error("erro ao salvar as url!")
        })
    }

    useEffect(()=>{
     function loadLinks(){
        const docRef=doc(db,"social","link")
         getDoc(docRef)
        .then((snapshot)=>{
            if(snapshot.data() !== undefined){
                setFacebook(snapshot.data().facebook)
                setInstagram(snapshot.data().instagram)
                setYoutube(snapshot.data().youtube)
            }
        })
    }
    loadLinks()
    },[])

    return(
        <div className="admin-container">
            <Header/>
            <h1 className="title-social">Rede social</h1>

            <form className="form" onSubmit={handleSave}>
            <label className="label">Link do Facebook</label>
             <Input
             placeholder="Digite a url do facebook..."
             value={facebook}
             onChange={(e)=>setFacebook(e.target.value)}
             />

             <label className="label">Link do Instagram</label>
             <Input
             placeholder="Digite a url do instagram..."
             value={instagram}
             onChange={(e)=>setInstagram(e.target.value)}
             />

             <label className="label">Link do Youtube</label>
             <Input
             placeholder="Digite a url do youtube..."
             value={youtube}
             onChange={(e)=>setYoutube(e.target.value)}
             />

             <button type="submit" className="btn-register">
                    Salvar Links <MdAddLink color="#fff" size={24} />
             </button>
            </form>
        </div>
    )
}

export default  Social;
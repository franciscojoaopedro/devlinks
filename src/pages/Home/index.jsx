import { useState,useEffect } from "react";
import { Social } from "../../components/Social";
import "./home.css"
import {FaFacebook,FaLinkedinIn,FaYoutube} from "react-icons/fa"
import {
getDocs,
collection,
orderBy,
query
} from "firebase/firestore"
import {db} from "../../services/firebaseConnection"


const Home=()=>{

    const [links,setLinks]=useState([])

useEffect(()=>{
    async function loadLinks(){
        const linksRef=collection(db,"links")
        const queryRef=query(linksRef,orderBy("created","asc"))
        getDocs(queryRef)
        .then((snapshot)=>{
            let lista=[]

            snapshot.forEach((doc)=>{
                lista.push({
                    id:doc.id,
                    name:doc.data().name,
                    url:doc.data().url,
                    bg:doc.data().bg,
                    color:doc.data().color,
                })
            })
            setLinks(lista)

        })
    }
    loadLinks()
},[])

useEffect(()=>{

},[])

    return(
        <div className="home-container">
            <h1>Francisco João Pedro</h1>
            <span>Veja os meus links👇</span>
           <main className="links">
           {
            links.map((item,index)=>(
                <section key={index} className="link-area" style={{backgroundColor:item.bg}}>
                <a href={item.url} target="_blank">
                    <p className="link-text" style={{color:item.color}} >{item.name}</p>
                </a>
            </section>
            ))
           }
            

            <footer>
                <Social url="https://www.facebook.com/ngunga.pedro.1/" >
                    <FaFacebook size={35} color="#fff" />
                </Social>
                <Social url="https://www.youtube.com/" >
                    <FaYoutube size={35} color="red" />
                </Social>
                <Social url="https://www.linkedin.com/in/francisco-pedro-a7812b1b8/" >
                    <FaLinkedinIn size={35} color="#fff" />
                </Social>
            </footer>
           </main>
        </div>
    )
}

export default Home;
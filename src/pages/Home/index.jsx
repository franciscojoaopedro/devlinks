import { useState,useEffect } from "react";
import { Social } from "../../components/Social";
import "./home.css"
import {FaFacebook,FaInstagram,FaYoutube} from "react-icons/fa"
import {
getDocs,
collection,
orderBy,
query,
doc,
getDoc
} from "firebase/firestore"
import {db} from "../../services/firebaseConnection"


const Home=()=>{

    const [links,setLinks]=useState([])
    const [sociaLinks,setSocialLinks]=useState({})

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
async function loadSocialLinks(){
     const docRef=doc(db,"social","link")
  await  getDoc(docRef)
    .then((snapshot)=>{
        if(snapshot.data() !== undefined){
            setSocialLinks({
                facebook:snapshot.data().facebook,
                instagram:snapshot.data().instagram,
                youtube:snapshot.data().youtube

            })
        }
    })
}
loadSocialLinks()
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
            

               {
                   links.length !== 0 && Object.keys(sociaLinks).length>0 &&(
              <footer>
                <Social url={sociaLinks?.facebook} >
                <FaFacebook size={35} color="#fff" />
                </Social>
                <Social url={sociaLinks?.youtube} >
                    <FaYoutube size={35} color="#fff" />
                </Social>
                <Social url={sociaLinks?.instagram} >
                    <FaInstagram size={35} color="#fff" />
                </Social>
            </footer>
                )
               }
           </main>
        </div>
    )
}

export default Home;
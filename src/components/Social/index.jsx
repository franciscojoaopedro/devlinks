import "./social.css"


const Social=({children,url})=>{
    return(
       <a  className="social" href={url} rel="noopener noreferrer" target="_blank" >
        {children}
       </a>
    )
}

export {Social}
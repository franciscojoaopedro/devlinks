import "./home.css"


const Home=()=>{
    return(
        <div className="home-container">
            <h1>Francisco João Pedro</h1>
            <span>Veja os meus links👇</span>
           <main className="links">
           <section className="link-area">
                <a href="#">
                    <p className="link-text">Nosso Canal no Youtube</p>
                </a>
            </section>
            <section className="link-area">
                <a href="https://www.facebook.com/ngunga.pedro.1/" target={"_blank"}>
                    <p className="link-text">Meu Facebook</p>
                </a>
            </section>
            <section className="link-area">
                <a href="https://github.com/franciscojoaopedro" target={"_blank"}>
                    <p className="link-text">Meu GitHub</p>
                </a>
            </section>
            <section className="link-area">
                <a href="https://franciscojoaopedro-dev.vercel.app/" target={"_blank"}>
                    <p className="link-text">Meu Portifólio</p>
                </a>
            </section>
           </main>
        </div>
    )
}

export default Home;
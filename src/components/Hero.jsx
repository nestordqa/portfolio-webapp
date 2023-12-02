import HeroImg from "../assets/HeroImg"

function Hero() {
    return (
      <>
        <section className="HeroSection" data-bs-spy="scroll" id="scrollspyHeading1">
            <div className="HeroContainer">
                <div className="HeroTexts">
                    <h1>Ayudando empresas a construir <span>productos digitales</span> de alta calidad.</h1>
                    <p>Tu mejor opcion para diseño y desarrollo web.</p>
                    <a className="ButtonScroll" href='#scrollspyHeading5'>
                        Contacto
                    </a>
                </div>
                <div className="HeroImage">
                    <HeroImg />
                </div>
            </div>
        </section>
      </>
  
    )
}
export default Hero
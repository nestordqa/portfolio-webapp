import HeroImg from "../assets/HeroImg"

function Hero() {
    return (
      <>
        <section className="HeroSection" data-bs-spy="scroll" id="scrollspyHeading1">
            <div className="HeroContainer">
                <div className="HeroTexts">
                    <h1>Helping companies build <br /><span>high-quality digital products.</span></h1>
                    <p>Your best option for design, development of web and mobile applications.</p>
                    <a className="ButtonScroll" href='#scrollspyHeading5'>
                        Contact us
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
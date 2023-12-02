import profile from "../assets/Perfil.jpg"
import GitHubLogo from "../assets/GitHubLogo.jsx"
import LinkedinLogo from "../assets/LinkedinLogo.jsx"
import InstagramLogo from "../assets/InstagramLogo.jsx"
import Resumen from "../assets/CV-VictorLovera.pdf"

function About() {
    return (
        <>
            <section className="AboutSection" data-bs-spy="scroll" id="scrollspyHeading2">
                <div className="AboutContainer">
                    <div className="AboutCard">
                        <div className="AboutProfile">
                            <img src={profile} />
                        </div>
                        <div className="AboutInformation">
                            <div className="AboutTexts">
                                <p className="AboutMe">Sobre Mi</p>
                                <h2>Victor Lovera</h2>
                                <p>Desarrollador Web - Full Stack</p>
                                <p className="Description">¡Hola!, mi nombre es Victor Lovera. Soy un programador Full Stack especializado en Front End con experiencia laboral. Me gustaría formar parte de un equipo IT que me permita desarrollarme profesionalmente. Manejo tecnologías como Vue, React, JavaScript, NodeJs y MongoDB.</p>
                            </div>
                            <div className="AboutExternals">
                                <div className="MediaContainer">
                                    <a className="Media" href="https://github.com/victor260622" target="_blank">
                                        <GitHubLogo />
                                    </a>
                                    <a className="Media" href="https://www.linkedin.com/in/victorlovera/" target="_blank" >
                                        <LinkedinLogo />
                                    </a>
                                    <a className="Media" href="https://www.instagram.com/vlovera.bl/" target="_blank" >
                                        <InstagramLogo />
                                    </a>
                                </div>
                                <button>
                                    <a href={Resumen} target="_blank" rel="noopener noreferrer" download="VictorLoveraCV.pdf">
                                        Descargar CV
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}
export default About
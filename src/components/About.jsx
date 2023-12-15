// import GitHubLogo from "../assets/GitHubLogo.jsx"
// import LinkedinLogo from "../assets/LinkedinLogo.jsx"
// import InstagramLogo from "../assets/InstagramLogo.jsx"
// import Resumen from "../assets/CV-VictorLovera.pdf"

function About() {
    return (
        <>
            <section className="AboutSection" data-bs-spy="scroll" id="scrollspyHeading2">
                <div className="AboutContainer">
                    <div className="AboutCard">
                        {/* <div className="AboutProfile">
                            <svg width="122" height="27" viewBox="0 0 122 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M80.0891 15.8068V14.5284C81.0494 14.5284 81.7198 14.3324 82.1005 13.9403C82.4812 13.5426 82.6715 12.8864 82.6715 11.9716V9.52557C82.6715 8.65625 82.7681 7.92614 82.9613 7.33523C83.1602 6.73864 83.4613 6.26136 83.8647 5.90341C84.2681 5.54545 84.7795 5.28693 85.3988 5.12784C86.0181 4.96875 86.7482 4.8892 87.5891 4.8892V6.90909C86.93 6.90909 86.4158 7.00568 86.0465 7.19886C85.6772 7.39205 85.4187 7.69318 85.271 8.10227C85.1289 8.50568 85.0579 9.02273 85.0579 9.65341V12.7557C85.0579 13.1932 84.9925 13.5994 84.8619 13.9744C84.7312 14.3437 84.4897 14.6648 84.1374 14.9375C83.7852 15.2102 83.2823 15.4233 82.6289 15.5767C81.9755 15.7301 81.1289 15.8068 80.0891 15.8068ZM87.5891 26.6307C86.7482 26.6307 86.0181 26.5511 85.3988 26.392C84.7795 26.233 84.2681 25.9744 83.8647 25.6165C83.4613 25.2585 83.1602 24.7812 82.9613 24.1847C82.7681 23.5938 82.6715 22.8636 82.6715 21.9943V19.5398C82.6715 18.6307 82.4812 17.9773 82.1005 17.5795C81.7198 17.1818 81.0494 16.983 80.0891 16.983V15.7131C81.1289 15.7131 81.9755 15.7898 82.6289 15.9432C83.2823 16.0909 83.7852 16.304 84.1374 16.5824C84.4897 16.8551 84.7312 17.179 84.8619 17.554C84.9925 17.9233 85.0579 18.3267 85.0579 18.7642V21.8665C85.0579 22.4915 85.1289 23.0057 85.271 23.4091C85.4187 23.8182 85.6772 24.1193 86.0465 24.3125C86.4158 24.5114 86.93 24.6108 87.5891 24.6108V26.6307ZM80.0891 16.983V14.5284H82.4499V16.983H80.0891ZM101.289 15.7557C101.289 17.8977 101.008 19.8665 100.446 21.6619C99.8832 23.4574 99.0621 25.1136 97.9826 26.6307H95.6474C96.0678 26.0682 96.4599 25.3778 96.8235 24.5597C97.1871 23.7415 97.5053 22.8466 97.7781 21.875C98.0508 20.8977 98.2638 19.8864 98.4173 18.8409C98.5707 17.7955 98.6474 16.767 98.6474 15.7557C98.6474 14.4091 98.5138 13.0426 98.2468 11.6562C97.9798 10.2699 97.619 8.98295 97.1644 7.79545C96.7099 6.60795 96.2042 5.6392 95.6474 4.8892H97.9826C99.0621 6.40625 99.8832 8.0625 100.446 9.85795C101.008 11.6534 101.289 13.6193 101.289 15.7557Z" fill="#FF3F66" />
                            </svg>
                        </div> */}
                        <div className="AboutInformation">
                            <div className="AboutTexts">
                                <p className="AboutMe">About us</p>
                                <h2>RLN-Code</h2>
                                <p>Full stack software development services.</p>
                                <p className="Description">
                                    
We are a team of systems engineers with more than 05 years of experience passionate about creating innovative solutions. Experienced in leading technologies such as Angular, React, NextJS, React Native, Flutter, Laravel, CodeIgniter, Java, Node.js, PostgreSQL, MongoDB and Emitter. We offer high-quality development services tailored to your needs.
                                </p>
                            </div>
                            <div className="AboutExternals">
                                <div className="MediaContainer">
                                    {/* <a className="Media" href="https://github.com/victor260622" target="_blank" rel="noreferrer">
                                        <GitHubLogo />
                                    </a>
                                    <a className="Media" href="https://www.linkedin.com/in/victorlovera/" target="_blank" rel="noreferrer">
                                        <LinkedinLogo />
                                    </a>
                                    <a className="Media" href="https://www.instagram.com/vlovera.bl/" target="_blank" rel="noreferrer">
                                        <InstagramLogo />
                                    </a> */}
                                </div>
                                <a className="ButtonScroll2" href='#scrollspyHeading4'>
                                    Look at our projects!
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}
export default About
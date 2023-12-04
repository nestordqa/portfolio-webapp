import Graphics from './Graphics.jsx'
function Skills () {
    return (
        <>
            <section className='SkillsSection' data-bs-spy="scroll" id="scrollspyHeading3">
                <h2>Habilidades</h2>
                <div className='SkillsContainer'>
                        <Graphics porcentage={100} image='CssLogo' lenguage='CSS' />
                        <Graphics porcentage={100} image='HtmlLogo' lenguage='HTML' />
                        <Graphics porcentage={100} image='JavaScriptLogo' lenguage='JavaScript' />
                        <div className='a'>
                            <Graphics porcentage={95} image='ReactLogo' lenguage='ReactJs' />
                            <Graphics porcentage={87} image='VueLogo' lenguage='VueJs' />
                        </div>
                </div>
                <div className='SkillsContainer'>
                        <Graphics porcentage={99} image='CssLogo' lenguage='CSS' />
                        <Graphics porcentage={99} image='HtmlLogo' lenguage='HTML' />
                        <Graphics porcentage={90} image='JavaScriptLogo' lenguage='JavaScript' />
                        <div className='a'>
                            <Graphics porcentage={72} image='ReactLogo' lenguage='ReactJs' />
                            <Graphics porcentage={87} image='VueLogo' lenguage='VueJs' />
                        </div>
                </div>
                <div className='SkillsContainer'>
                        <Graphics porcentage={99} image='CssLogo' lenguage='CSS' />
                        <Graphics porcentage={99} image='HtmlLogo' lenguage='HTML' />
                        <Graphics porcentage={90} image='JavaScriptLogo' lenguage='JavaScript' />
                        <div className='a'>
                            <Graphics porcentage={72} image='ReactLogo' lenguage='ReactJs' />
                            <Graphics porcentage={87} image='VueLogo' lenguage='VueJs' />
                        </div>
                </div>
            </section>
        </>
    )
}
export default Skills
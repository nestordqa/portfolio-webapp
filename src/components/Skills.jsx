import Graphics from './Graphics.jsx'
function Skills () {
    return (
        <>
            <section className='SkillsSection' data-bs-spy="scroll" id="scrollspyHeading3">
                <h2>Skills</h2>
                <div className='SkillsContainer'>
                        <Graphics porcentage={100} image='CssLogo' lenguage='CSS' />
                        <Graphics porcentage={100} image='HtmlLogo' lenguage='HTML' />
                        <Graphics porcentage={100} image='JavaScriptLogo' lenguage='JavaScript' />
                        <div className='a'>
                            <Graphics porcentage={95} image='ReactLogo' lenguage='ReactJs' />
                            <Graphics porcentage={95} image='AngularLogo' lenguage='Angular' />
                        </div>
                </div>
                <div className='SkillsContainer'>
                        <Graphics porcentage={95} image='PostgresLogo' lenguage='PostgreSQL' />
                        <Graphics porcentage={95} image='FlutterLogo' lenguage='Flutter' />
                        <Graphics porcentage={80} image='LaravelLogo' lenguage='Laravel' />
                        <div className='a'>
                            <Graphics porcentage={90} image='JavaLogo' lenguage='Java' />
                            <Graphics porcentage={100} image='NodeLogo' lenguage='NodeJs' />
                        </div>
                </div>
                {/* <div className='SkillsContainer'>
                        <Graphics porcentage={80} image='NestLogo' lenguage='NestJS' />
                        <Graphics porcentage={95} image='FlutterLogo' lenguage='Flutter' />
                        <Graphics porcentage={80} image='LaravelLogo' lenguage='Laravel' />
                </div> */}
            </section>
        </>
    )
}
export default Skills
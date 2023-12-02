import ProyectCard from './ProyectCard.jsx'
function Proyects () {
    return (
        <>
            <section className='ProyectsSection' data-bs-spy="scroll" id="scrollspyHeading4">
                <h2>Proyectos</h2>
                <div className='ProyectsCards'>
                    <ProyectCard colorCard={'red'} Title={'Proyect-Futbol'} description={'Tabla de posiciones de la liga profesional de futbol Argentino, responsive, hecho con Web Scraping, MongoDB, Node.js. CSS y Handlebars.'} link={'https://github.com/victor260622/Proyect-Futbol'} />
                    <ProyectCard colorCard={'#343AC8'} Title={'Proyect-Festival'} description={'Pagina informativa de para un festival de música, hecho de manera responsive, usando SASS, GULP y HTML.'} link='https://github.com/victor260622/Proyecto-Festival' />
                    <ProyectCard colorCard={'#AE0CB1'} Title={'Proyect-Redeux'} description={'Pagina web Empresarial de envios de paquetes al exterior, hecho de manera responsive, usando CSS, JavaScript, HTML y BootsTrap.'} link='https://github.com/victor260622/Proyect-Redeux' />
                </div>
            </section>
        </>
    )
}
export default Proyects
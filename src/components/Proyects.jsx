import ProyectCard from './ProyectCard.jsx';
function Proyects () {
    const projects = [
        {
            description: 'Aplicación web dedicada al aprendizaje entre la relación entre la música y los negocios, con sucursales en México, Costa Rica y Honduras.',
            title: 'Seed Academy',
            url: 'https://www.seedcademy.io/'
        },
        {
            description: 'Aplicación móvil enfocada en trackeo de flotas de vehículos de grandes compañías, desarrollada para compañía de Venezuela dedicada a geolocalización.',
            title: 'GTR Max',
            url: 'https://play.google.com/store/apps/details?id=ve.com.sigis.gtr'
        },
        {
            description: 'Aplicación web dedicada a agencia de Marketing y Branding, ubicada en Trinidad y Tobago.',
            title: 'Marcelo Design X',
            url: 'https://www.marcelodesignx.com/'
        },
        {
            description: 'Aplicación móvil enfocada en trackeo de flotas de vehículos para personas particulares, desarrollada para compañía de Venezuela dedicada a geolocalización.º',
            title: 'GTR One',
            url: 'https://play.google.com/store/apps/details?id=ve.com.sigis.gtrone'
        },
        {
            description: 'Aplicación web desarrollada para empresa ubicada en Argentina dedicada a servicios referentes a recursos humanos.',
            title: 'Consultora Enlazar',
            url: 'https://consultoraenlazar.com.ar/'
        },
        {
            description: 'Aplicación móvil desarrollada con el fin de trackear en tiempo real ubicación de familiares.',
            title: 'Trazapp (App móvil)',
            url: 'https://play.google.com/store/apps/details?id=app.traza.flutter&pli=1'
        },
        {
            description: 'Aplicación web creada para visualizar en tiempo real la ubicación de los dispositivos asociados desde la app Trazapp móvil, desarrollada para compañía de Venezuela dedicada a geolocalización.',
            title: 'Trazapp (App web)',
            url: 'https://trazapp.sigisqa.com/'
        },
        {
            description: 'App móvil desarrollada para gran empresa de telecomunicaciones en Venezuela, con el fin de rastrear vehículos y/o personas en tiempo real, desarrollada para compañía de Venezuela dedicada a geolocalización.',
            title: 'Dónde estás',
            url: 'https://play.google.com/store/apps/details?id=ve.com.dondeestas'
        },
        {
            description: 'Web app desarrollada para agencia de markenting, branding y diseño. Compañía con sucursales en Estados Unidos y República Dominicana',
            title: 'Three Columns Studio',
            url: 'https://threecolumnsstudio.com/'
        }
    ];
    return (
        <>
            <section className='ProyectsSection' data-bs-spy="scroll" id="scrollspyHeading4">
                <h2>Our projects</h2>
                <div className='ProyectsCards'>
                    {
                        projects.slice(0, 3).map((project, idx) => <ProyectCard description={project.description} url={project.url} title={project.title} key={idx}/>)
                    }
                </div>
                <div className='ProyectsCards'>
                    {
                        projects.slice(3, 6).map((project, idx) => <ProyectCard description={project.description} url={project.url} title={project.title} key={idx}/>)
                    }
                </div>
                <div className='ProyectsCards'>
                    {
                        projects.slice(6, 9).map((project, idx) => <ProyectCard description={project.description} url={project.url} title={project.title} key={idx}/>)
                    }
                </div>
            </section>
        </>
    )
}
export default Proyects
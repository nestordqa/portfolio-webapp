import ProyectCard from './ProyectCard.jsx';
function Proyects () {
    const projects = [
        {
            description: 'Web application dedicated to learning the relationship between music and business, with branches in Mexico, Costa Rica and Honduras.',
            title: 'Seed Academy',
            url: 'https://www.seedcademy.io/'
        },
        {
            description: 'Mobile application focused on tracking vehicle fleets of large companies, developed for a Venezuelan company dedicated to geolocation.',
            title: 'GTR Max',
            url: 'https://play.google.com/store/apps/details?id=ve.com.sigis.gtr'
        },
        {
            description: 'Web application dedicated to a Marketing and Branding agency, located in Trinidad and Tobago.',
            title: 'Marcelo Design X',
            url: 'https://www.marcelodesignx.com/'
        },
        {
            description: 'Mobile application focused on tracking vehicle fleets for individuals, developed for a Venezuelan company dedicated to geolocation.',
            title: 'GTR One',
            url: 'https://play.google.com/store/apps/details?id=ve.com.sigis.gtrone'
        },
        {
            description: 'Web application developed for a company located in Argentina dedicated to services related to human resources.',
            title: 'Consultora Enlazar',
            url: 'https://consultoraenlazar.com.ar/'
        },
        // {
        //     description: 'Mobile application developed in order to track the location of family members in real time.',
        //     title: 'Trazapp (Mobile app)',
        //     url: 'https://play.google.com/store/apps/details?id=app.traza.flutter&pli=1'
        // },
        {
            description: 'Web application created to view the location of associated devices in real time from the Trazapp mobile app, developed for a Venezuelan company dedicated to geolocation.',
            title: 'Trazapp (Web app)',
            url: 'https://trazapp.sigisqa.com/'
        },
        {
            description: 'Mobile app developed for a large telecommunications company in Venezuela, in order to track vehicles and/or people in real time.',
            title: 'Dónde estás',
            url: 'https://play.google.com/store/apps/details?id=ve.com.dondeestas'
        },
        {
            description: 'Web app developed for marketing, branding and design agency. Company with branches in the United States and the Dominican Republic.',
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
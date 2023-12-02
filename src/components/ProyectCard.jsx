function ProyectCard ({colorCard = 'blue', Title = 'Panzza Pizzeria', description = '', link = ''}) {
    return (
        <>
            <section className="CardSection">
                <div className="CardText">
                    <p>{Title}</p>
                    <p>{description}</p>
                    <a style={{color: colorCard}} target="_blank" href={link}>Vizualizar Proyecto</a>
                </div>
            </section>
        </>
    )
}
export default ProyectCard
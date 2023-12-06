import PropTypes from 'prop-types';
const ProyectCard = ({description, url}) => {    
    return (
        <>
            <section className="card__container">
                <div className="card__bx">
                    <div className="card__data">
                        <div className="card__icon">
                            <i className="fa-solid fa-paintbrush"></i>
                        </div>
                        <div className="card__content">
                            <h3>Designing</h3>
                            <p>{description}</p>
                            <a href={url}>Look at project!</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
ProyectCard.propTypes = {
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
};
export default ProyectCard;
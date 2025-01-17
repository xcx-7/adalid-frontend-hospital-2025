import { PropTypes } from "prop-types";

export default function ServiceList({ services }) {
    return (
        <div>
            <h2>Servicios</h2>
            <ul className="services-list">
                { services.map(service => (
                    <li key={service.id}>
                        <img className="service__img" src={service.imageUrl} alt={service.name} />
                        <h2 className="service__department">{service.name}</h2>
                        <p>{service.description}</p>
                    </li>
                ))}  
            </ul>
        </div>
    );
};

ServiceList.propTypes = {
    services: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    })).isRequired
 }
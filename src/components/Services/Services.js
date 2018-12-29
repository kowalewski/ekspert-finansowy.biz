import React from 'react';
import { shape, string, arrayOf, number } from 'prop-types';

export default function Services({ services }) {
    return (
        <div className="services">
            {services.map(service => (
                <div className="services__item" key={service.id}>
                    <h3 className="services__title">{service.title}</h3>
                    <p className="services__text">{service.content}</p>
                </div>
            ))}
        </div>
    );
}

Services.propTypes = {
    services: arrayOf(
        shape({
            id: number.isRequired,
            title: string.isRequired,
            content: string.isRequired,
        })
    ).isRequired,
};

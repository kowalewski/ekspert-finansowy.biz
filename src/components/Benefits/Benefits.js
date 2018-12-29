import React from 'react';
import { shape, string, arrayOf, number } from 'prop-types';

export default function Benefits({ benefits }) {
    return (
        <div className="benefits">
            {benefits.map(benefit => (
                <div className="benefits__item" key={benefit.id}>
                    <h3 className="benefits__title">{benefit.title}</h3>
                </div>
            ))}
        </div>
    );
}

Benefits.propTypes = {
    benefits: arrayOf(
        shape({
            id: number.isRequired,
            title: string.isRequired,
        })
    ).isRequired,
};

import React from 'react';
import { node, oneOf, string } from 'prop-types';

export default function Section({ title, intro, children, modificator }) {
    const modificatorClass = modificator ? `section--${modificator}` : '';
    return (
        <div className={`section ${modificatorClass}`}>
            {title && <h3 className="section__title">{title}</h3>}
            {intro && (
                <div className="section__intro">
                    <p className="section__ingress">{intro}</p>
                </div>
            )}
            {children}
        </div>
    );
}

Section.propTypes = {
    children: node,
    modificator: oneOf(['dark', 'regular-padding']),
    title: string,
    intro: string,
};

import React from 'react';
import { node, oneOf } from 'prop-types';

export default function Section({ children, modificator }) {
    const modificatorClass = modificator ? `section--${modificator}` : '';
    return <div className={`section ${modificatorClass}`}>{children}</div>;
}

Section.propTypes = {
    children: node,
    modificator: oneOf(['dark']),
};

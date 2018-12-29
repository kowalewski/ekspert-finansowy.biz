import React from 'react';
import { node } from 'prop-types';

export default function Row({ children }) {
    return <div className="row">{children}</div>;
}

Row.propTypes = {
    children: node,
};

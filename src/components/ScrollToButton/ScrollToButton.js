import React from 'react';
import { string } from 'prop-types';

export default function ScrollToButton({ selector, label }) {
    const onClick = () => {
        const element = document.querySelector(selector);
        if (!element) {
            return;
        }

        window.scroll({
            top: element.getBoundingClientRect().top,
            behavior: 'smooth',
        });
    };

    return (
        <button className="scroll-to-button" onClick={onClick} title={label}>
            {label}
        </button>
    );
}

ScrollToButton.propTypes = {
    selector: string.isRequired,
    label: string.isRequired,
};

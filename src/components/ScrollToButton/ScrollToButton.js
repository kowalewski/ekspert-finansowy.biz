import React from 'react';
import { string } from 'prop-types';

export default function ScrollToButton({selector}) {

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
        <button
            className="scroll-to-button"
            onClick={ onClick }
        />
    )
}

ScrollToButton.propTypes = {
    selector: string.isRequired,
}
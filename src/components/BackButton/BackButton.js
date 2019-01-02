import React from 'react';

export default function BackButton() {
    const onClick = () => window.history.back();
    return (
        <button className="back-button" onClick={onClick}>
            &lsaquo;
        </button>
    );
}

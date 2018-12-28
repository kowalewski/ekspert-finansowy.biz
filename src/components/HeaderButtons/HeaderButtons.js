import React from 'react';

export default function HeaderButtons() {
    return (
        <div className="header-buttons">
            <div className="header-buttons__phone-container">
                <span>+48 785 808 378</span>
                <a
                    href="tel: +48 785 808 378"
                    className="header-buttons__icon"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Ekspert finansowy - telefon"
                >
                    <img
                        src="img/icon-phone.svg"
                        alt="Ekspert finansowy - telefon"
                    />
                </a>
            </div>
            <a
                href="https://www.facebook.com/finansekredytyubezpieczenia/"
                className="header-buttons__icon"
                target="_blank"
                rel="noopener noreferrer"
                title="Ekspert finansowy - profil facebook"
            >
                <img
                    src="img/icon-fb.svg"
                    alt="Ekspert finansowy - profil facebook"
                />
            </a>
            <a
                href="mailto: pawel.kowalewski@opendirect.pl"
                className="header-buttons__icon"
                title="Ekspert finansowy - mail"
            >
                <img src="img/icon-mail.svg" alt="Ekspert finansowy - mail" />
            </a>
        </div>
    );
}

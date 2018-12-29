import React from 'react';
import phoneIcon from '../../img/icon-phone.svg';
import fbIcon from '../../img/icon-fb.svg';
import mailIcon from '../../img/icon-mail.svg';

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
                    <img src={phoneIcon} alt="Ekspert finansowy - telefon" />
                </a>
            </div>
            <a
                href="https://www.facebook.com/finansekredytyubezpieczenia/"
                className="header-buttons__icon"
                target="_blank"
                rel="noopener noreferrer"
                title="Ekspert finansowy - profil facebook"
            >
                <img src={fbIcon} alt="Ekspert finansowy - profil facebook" />
            </a>
            <a
                href="mailto: pawel.kowalewski@opendirect.pl"
                className="header-buttons__icon"
                title="Ekspert finansowy - mail"
            >
                <img src={mailIcon} alt="Ekspert finansowy - mail" />
            </a>
        </div>
    );
}

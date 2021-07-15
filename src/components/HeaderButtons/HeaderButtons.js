import React from 'react';
import phoneIcon from '../../img/icon-phone.svg';
import fbIcon from '../../img/icon-fb.svg';
import mailIcon from '../../img/icon-mail.svg';
import constants from '@constants';

export default function HeaderButtons() {
    return (
        <div className="header-buttons">
            <div className="header-buttons__phone-container">
                <span>{constants.PHONE}</span>
                <a
                    href={`tel: ${constants.PHONE}`}
                    className="header-buttons__icon"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Kredyty i ubezpieczenia - telefon"
                >
                    <img
                        src={phoneIcon}
                        alt="Kredyty i ubezpieczenia - telefon"
                    />
                </a>
            </div>
            <a
                href="https://www.facebook.com/finansekredytyubezpieczenia/"
                className="header-buttons__icon"
                target="_blank"
                rel="noopener noreferrer"
                title="Kredyty i ubezpieczenia - profil facebook"
            >
                <img
                    src={fbIcon}
                    alt="Kredyty i ubezpieczenia - profil facebook"
                />
            </a>
            <a
                href="mailto: kredyty.kowalewski@gmail.com"
                className="header-buttons__icon"
                title="Kredyty i ubezpieczenia - mail"
            >
                <img src={mailIcon} alt="Kredyty i ubezpieczenia - mail" />
            </a>
        </div>
    );
}

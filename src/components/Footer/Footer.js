import React from 'react';
import Row from '../Row/Row';
import Section from '../Section/Section';
import constants from '@constants';

export default function Footer() {
    return (
        <footer>
            <Section modificator="dark">
                <Row>
                    <div className="footer__container">
                        <div className="footer__box">
                            <address className="footer__item">
                                <strong>Adres:</strong>
                                <br />
                                ul. Konarskiego 1,
                                <br />
                                16-500 Sejny
                            </address>
                            <p className="footer__item">
                                <strong>Godziny otwarcia:</strong>
                                <br />
                                09:00 - 17:00
                            </p>
                        </div>
                        <div className="footer__box">
                            <p className="footer__item">
                                <strong>Telefon:</strong>
                                <br />
                                <a
                                    href={`tel: ${constants.PHONE}`}
                                    title={`Numer telefonu: ${constants.PHONE}`}
                                >
                                    {constants.PHONE}
                                </a>
                            </p>
                            <p className="footer__item">
                                <strong>Email:</strong>
                                <br />
                                <a
                                    href="mailto: kredyty.kowalewski@gmail.com"
                                    title="Adres e-mail: kredyty.kowalewski@gmail.com"
                                >
                                    kredyty.kowalewski@gmail.com
                                </a>
                            </p>
                            <p className="footer__item">
                                <strong>Facebook:</strong>
                                <br />
                                <a
                                    href="https://www.facebook.com/finansekredytyubezpieczenia/"
                                    title="Profil Facebook: /finansekredytyubezpieczenia/"
                                >
                                    /finansekredytyubezpieczenia/
                                </a>
                            </p>
                        </div>
                    </div>
                </Row>
            </Section>
        </footer>
    );
}

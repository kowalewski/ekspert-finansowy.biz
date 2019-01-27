import React from 'react';
import Row from '../Row/Row';
import Section from '../Section/Section';

export default function Footer() {
    return (
        <footer>
            <Section modificator="dark">
                <Row>
                    <div className="footer__container">
                        <div className="footer__box">
                            <p className="footer__item">
                                <strong>Adres:</strong>
                                <br />
                                ul. Rynek Zygmunta Augusta 11/1, <br />
                                16-300 Augustów
                            </p>
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
                                <a href="tel: +48 785 808 378" title="Numer telefonu: +48 785 808 378">
                                    +48 785 808 378
                                </a>
                            </p>
                            <p className="footer__item">
                                <strong>Email:</strong>
                                <br />
                                <a href="mailto: pawel.kowalewski@opendirect.pl" title="Adres e-mail: pawel.kowalewski@opendirect.pl">
                                    pawel.kowalewski@opendirect.pl
                                </a>
                            </p>
                            <p className="footer__item">
                                <strong>Facebook:</strong>
                                <br />
                                <a href="https://www.facebook.com/finansekredytyubezpieczenia/" title="Profil Facebook: /finansekredytyubezpieczenia/">
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

import React, { Component } from 'react';
import MovingBackground from '../MovingBackground/MovingBackground';
import openFinanceLogo from '../../img/open-finance-logo.png';
import bgImage from '../../img/bg-large.jpg';
import ScrollToButton from '../ScrollToButton/ScrollToButton';

export default class Intro extends Component {
    state = {
        isContentVisible: false,
    };

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isContentVisible: true,
            });
        }, 200);
    }

    render() {
        const { isContentVisible } = this.state;
        const contentClass = isContentVisible
            ? 'intro__content--is-visible'
            : '';

        return (
            <div className="intro">
                <div className="intro__wrapper">
                    <MovingBackground
                        className="intro__bg"
                        backgroundImageUrl={bgImage}
                    />
                    <div className={`intro__content ${contentClass}`}>
                        <img
                            className="intro__logo"
                            src={openFinanceLogo}
                            alt="logo Open Finance"
                        />
                        <h1 className="intro__title">
                            Paweł <br /> Kowalewski
                        </h1>
                        <h2 className="intro__subtitle">
                            Ekspert finansowy <br /> Augustów
                        </h2>
                        <p className="intro__ingress">
                            Każdego klienta traktuję indywidualnie. Skupiając
                            się na Państwa potrzebach, gwarantuję pełne
                            zaangażowanie, a także satysfakcję z udzielanych
                            przeze mnie porad.
                        </p>
                    </div>
                </div>
                <ScrollToButton selector=".js-content" />
            </div>
        );
    }
}

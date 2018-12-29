import React, { Component } from 'react';
import MovingBackground from '../MovingBackground/MovingBackground';
import openFinanceLogo from '../../img/open-finance-logo.png';
import bgImage from '../../img/bg-large.jpg';

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

    onArrowClick = selector => () => {
        const $element = document.querySelector(selector);
        window.scroll({
            top: $element.getBoundingClientRect().top,
            behavior: 'smooth',
        });
    };

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
                        <h2 className="intro__subtitle">Ekspert finansowy</h2>
                        <p className="intro__ingress">
                            Każdego klienta traktuję indywidualnie. Skupiając
                            się na Państwa potrzebach, gwarantuję pełne
                            zaangażowanie, a także satysfakcję z udzielanych
                            przeze mnie porad.
                        </p>
                    </div>
                </div>
                <button
                    className="intro__navigation js-scroll-to"
                    onClick={this.onArrowClick('.js-content')}
                />
            </div>
        );
    }
}

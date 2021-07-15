import React, { Component } from 'react';
import MovingBackground from '../MovingBackground/MovingBackground';
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
                        <h1 className="intro__title">
                            Kredyty i ubezpieczenia
                        </h1>
                        <h2 className="intro__subtitle">Paweł Kowalewski</h2>
                        <p className="intro__ingress">
                            Każdego klienta traktuję indywidualnie. Skupiając
                            się na Państwa potrzebach, gwarantuję pełne
                            zaangażowanie, a także satysfakcję z udzielanych
                            przeze mnie porad.
                        </p>
                    </div>
                </div>
                <ScrollToButton
                    selector=".js-content"
                    label="Przewiń do treści"
                />
            </div>
        );
    }
}

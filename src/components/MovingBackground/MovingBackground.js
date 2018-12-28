import React, { Component } from 'react';
import { string, number } from 'prop-types';

export default class MovingBackground extends Component {
    static propTypes = {
        className: string,
        backgroundImageUrl: string,
        cssScale: number,
        translateFactor: number,
    };

    static defaultProps = {
        translateFactor: 15,
        cssScale: 1.1,
    };

    state = {
        positionX: 0,
        positionY: 0,
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
    };

    componentDidMount() {
        this.elementRef.addEventListener('mousemove', this.onMouseMove);
        window.addEventListener('resize', this.onWindowResize);
    }

    componentWillUnmount() {
        this.elementRef.removeEventListener('mousemove', this.onMouseMove);
        window.removeEventListener('resize', this.onWindowResize);
    }

    onMouseMove = event => {
        this.setPosition(event);
    };

    setPosition = event => {
        const { translateFactor } = this.props;
        const { windowWidth, windowHeight } = this.state;
        const mousePosition = {
            x: event.clientX,
            y: event.clientY,
        };

        this.setState({
            positionX: (mousePosition.x - windowWidth / 2) / translateFactor,
            positionY: (mousePosition.y - windowHeight / 2) / translateFactor,
        });
    };

    onWindowResize = () => {
        this.setState({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    };

    render() {
        const { positionX, positionY } = this.state;
        const { className, backgroundImageUrl, cssScale } = this.props;

        return (
            <div
                className={className}
                ref={element => (this.elementRef = element)}
                style={{
                    backgroundImage: `url(${backgroundImageUrl})`,
                    transform: `translate3d(${-positionX}px, ${-positionY}px, 0) scale(${cssScale})`,
                }}
            />
        );
    }
}

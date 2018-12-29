import React, { Component } from 'react';
import { shape, number, string, node } from 'prop-types';

export default class InView extends Component {
    static propTypes = {
        config: shape({
            rootMargin: string,
            threshold: number,
        }),
        children: node,
    };

    static defaultProps = {
        config: {
            rootMargin: '0px 0px 50px 0px',
            threshold: 0,
        },
    };

    state = {
        inView: false,
    };

    componentDidMount() {
        if (typeof IntersectionObserver === 'function') {
            this.initIntersectionObserver();
        } else {
            this.setState({
                inView: true,
            });
        }
    }

    initIntersectionObserver = () => {
        const { config } = this.props;

        const observer = new IntersectionObserver((entries, self) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.setState({
                        inView: true,
                    });

                    self.unobserve(entry.target);
                }
            });
        }, config);

        observer.observe(this.elementRef);
    };

    render() {
        const { inView } = this.state;
        const { children } = this.props;

        return (
            <div ref={element => (this.elementRef = element)}>
                {inView ? children : null}
            </div>
        );
    }
}

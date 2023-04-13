
import React from 'react'
export default (WrappedComponent) => {
    class HOC extends React.Component {
        static displayName = 'withFoo';

        constructor(props) {
            super(props);
            this.state = {reached: props.forceScroll? true : false};
        }

        componentDidMount() {
            this.listener = window.addEventListener('scroll', this.onScroll);
        }

        onScroll = () => {
            if (!this.scrolled) {
                this.scrolled = true;
                this.setState({ reached: true });
                window.addEventListener('scroll', this.onScroll);
            }
        }

        render() {
            return this.state.reached ? (
                <WrappedComponent
                  ref="wrappedComponent"
                  {...this.props}
                  {...this.state}
                />
            ) : <div ref={target => this.target = target} />;
        }
    }

    return HOC;
};

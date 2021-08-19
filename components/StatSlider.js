import React from 'react';
import cn from 'classnames';
import propTypes from 'prop-types';

const _propTypes = {
    className: propTypes.string,
    subTitle: propTypes.string,
    min: propTypes.number,
    max: propTypes.number,
    title: propTypes.string,
};

const StatSlider = global.StatSlider = class extends React.PureComponent {
    static displayName = 'StatSlider';

    static propTypes = _propTypes;

    render() {
        const { subTitle, title, min, max, ...rest } = this.props;
        return (

            <div className={cn(this.props.className, '')}>
                <p className="text-primary text-center mb-0 text-small">{this.props.subTitle}</p>
                <h3 className="text-white text-center mb-2">{this.props.title}</h3>
                <div className="range">
                    <input type="range" min={this.props.min} max={this.props.max} />
                </div>
            </div>

        );
    }
};
export default StatSlider;

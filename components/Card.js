import React from 'react';
import cn from 'classnames';
import propTypes from 'prop-types';

const _propTypes = {
    className: propTypes.string,
    children: propTypes.node,
    onClick: propTypes.func,
    ButtonComponent: propTypes.any,
};

const Card = global.Card = class extends React.PureComponent {
    static displayName = 'Card';

    static propTypes = _propTypes;

    static defaultProps = {
        ButtonComponent: ButtonSecondary,
    };

    render() {
        const { children, ButtonComponent, ...rest } = this.props;
        return (
            <div className={cn(this.props.className, ' card')}>
                <h5 className="card-title pt-3 pb-3 pl-4">{this.props.cardTitle || 'Card Title'}</h5>
                <div className="card-body">
                    <p className="card-text">
                        {this.props.cardText || 'An open source library allowing you to create an internet connected LED wall.'}</p>
                </div>
                <div className="row pl-4 pr-4">
                    <div className="col-md-4">
                        <p className="text-white">C#</p>
                    </div>
                    <div className="col-md-4">
                        <p className="text-white">119</p>
                    </div>
                    <div className="col-md-4">
                        <p className="text-white">14</p>
                    </div>
                </div>
            </div>
        );
    }
};
export default Card;

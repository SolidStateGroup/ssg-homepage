import React from 'react';
import cn from 'classnames';
import propTypes from 'prop-types';

const _propTypes = {
    className: propTypes.string,
    cardTitle: propTypes.string,
    children: propTypes.node,
};

const CardBuildCosts = global.CardBuildCosts = class extends React.PureComponent {
    static displayName = 'CardBuildCosts';

    static propTypes = _propTypes;

    render() {
        const { children, ButtonComponent, cardTitle, className, ...rest } = this.props;
        return (

            <div className={cn(this.props.className, ' card-build-costs pl-5 pr-5 ml-0 mr-0 pb-5')}>
                <p className="text-light text-center pt-4 pb-3">{this.props.cardTitle || null}</p>
                {this.props.children}
            </div>

        );
    }
};
export default CardBuildCosts;

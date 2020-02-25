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
                    <div className="row pl-4 pr-4 card__footer">
                        <div className="col-md-12">
                            <a target="_blank" href={this.props.cardLink}>
                                <ButtonText className="text-white pl-0 mb-3" buttonText='View on GitHub' />
                            </a>
                            <p className={cn('text-white card__technology', this.props.techColourClass)}>{this.props.cardTechnology || 'JavaScript'}</p>
                        </div>
                        <div className="col-md-6">
                            <img src="/static/images/svg-icons/star-thin-icon.svg" />
                            <p className="d-inline-block text-white ml-2">{this.props.cardTechnologyStars || '120'}</p>
                        </div>
                        <div className="col-md-6">
                            <img src="/static/images/svg-icons/git-branch-icon.svg" />
                            <p className="d-inline-block text-white ml-2">{this.props.cardTechnologyForked || '20'}</p>
                        </div>
                    </div>
                </div>

        );
    }
};
export default Card;

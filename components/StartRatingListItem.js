import React from 'react';
import cn from 'classnames';
import propTypes from 'prop-types';

const _propTypes = {
    className: propTypes.string,
    icon: propTypes.string,
    filled: propTypes.bool,
    starRating: propTypes.string,
    numberOfRatings: propTypes.string,
};

const StarRatingListItem = global.StarRatingListItem = class extends React.PureComponent {
    static displayName = 'StarRatingListItem';

    static propTypes = _propTypes;

    render() {
        const { icon, filled, className, starRating, numberOfRatings, ...rest } = this.props;
        return (
            <div className={cn(this.props.className, 'flex-row')}>
                <i className={(`rating-list__app-store-icon text-light ${icon}`)} />
                <div className="pl-3">

                    <i className={`rating-list__star-icon pl-2 ${this.props.filled ? 'fas fa-star text-gold' : 'far fa-star text-light'}`} />
                    <i className={`rating-list__star-icon pl-2 ${this.props.filled ? 'fas fa-star text-gold' : 'far fa-star text-light'}`} />
                    <i className={`rating-list__star-icon pl-2 ${this.props.filled ? 'fas fa-star text-gold' : 'far fa-star text-light'}`} />
                    <i className={`rating-list__star-icon pl-2 ${this.props.filled ? 'fas fa-star text-gold' : 'far fa-star text-light'}`} />
                    <i className={`rating-list__star-icon pl-2 ${this.props.filled ? 'fas fa-star text-gold' : 'far fa-star text-light'}`} />
                </div>
                <div className="pl-3">
                    <h4 className="text-light d-inline-block mb-0">{this.props.starRating}</h4>
                    <span className="text-light d-inline-block pl-1">({this.props.numberOfRatings}k)</span>
                </div>
            </div>
        );
    }
};

export default StarRatingListItem;
import React from 'react';
import cn from 'classnames';
import propTypes from 'prop-types';

const _propTypes = {
    className: propTypes.string,
    icon: propTypes.string,
    filled: propTypes.bool,
    starRating: propTypes.number,
    numberOfRatings: propTypes.number,
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

                    <i className={`rating-list__star-icon pl-2 ${starRating > 0 ? 'fas fa-star text-gold' : 'far fa-star text-light'}`} />
                    <i className={`rating-list__star-icon pl-2 ${starRating > 1 ? 'fas fa-star text-gold' : 'far fa-star text-light'}`} />
                    <i className={`rating-list__star-icon pl-2 ${starRating > 2 ? 'fas fa-star text-gold' : 'far fa-star text-light'}`} />
                    <i className={`rating-list__star-icon pl-2 ${starRating > 3 ? 'fas fa-star text-gold' : 'far fa-star text-light'}`} />
                    <i className={`rating-list__star-icon pl-2 ${starRating === 5 ? 'fas fa-star text-gold' : 'far fa-star text-light'}`} />
                </div>
                <div className="pl-3 rating-list__meta">
                    <h4 className="text-light d-inline-block mb-0">{this.props.starRating}</h4>
                    <span className="text-light d-inline-block pl-1">({Utils.nFormatter(numberOfRatings || 0, 1)})</span>
                </div>
            </div>
        );
    }
};

export default StarRatingListItem;

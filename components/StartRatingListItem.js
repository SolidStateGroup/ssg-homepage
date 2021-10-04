import React from 'react';
import cn from 'classnames';
import propTypes from 'prop-types';

const _propTypes = {
    className: propTypes.string,
    icon: propTypes.string,
    filled: propTypes.bool,
    starRating: propTypes.number,
  ratingClassName: propTypes.string,
    numberOfRatings: propTypes.number,
};

const StarRatingListItem = global.StarRatingListItem = class extends React.PureComponent {
    static displayName = 'StarRatingListItem';

    static propTypes = _propTypes;

    render() {
        const { icon, filled, className, starRating, numberOfRatings,ratingClassName, ...rest } = this.props;
        return (
            <Row className={cn(this.props.className, 'flex-row')}>
                <div style={{ width: 20 }}>
                    <i className={(`rating-list__app-store-icon text-light ${icon}`)} />
                </div>
                <div className={"rating-list position-relative" + " " + ratingClassName}>
                    <Row className="rating-list__background">
                        <i className="rating-list__star-icon pl-2 fas fa-star" />
                        <i className="rating-list__star-icon pl-2 fas fa-star" />
                        <i className="rating-list__star-icon pl-2 fas fa-star" />
                        <i className="rating-list__star-icon pl-2 fas fa-star" />
                        <i className="rating-list__star-icon pl-2 fas fa-star" />
                    </Row>
                    <Row className="rating-list__foreground">
                        <i className={`rating-list__star-icon pl-2 ${starRating > 0 ? 'fas fa-star text-gold' : 'far fa-star'} ${starRating === 0.5 && 'fa-star-half'}`} />
                        <i className={`rating-list__star-icon pl-2 ${starRating > 1 ? 'fas fa-star text-gold' : 'far fa-star'} ${starRating === 1.5 && 'fa-star-half'}`} />
                        <i className={`rating-list__star-icon pl-2 ${starRating > 2 ? 'fas fa-star text-gold' : 'far fa-star'} ${starRating === 2.5 && 'fa-star-half'}`} />
                        <i className={`rating-list__star-icon pl-2 ${starRating > 3 ? 'fas fa-star text-gold' : 'far fa-star'} ${starRating === 3.5 && 'fa-star-half'}`} />
                        <i className={`rating-list__star-icon pl-2 ${starRating === 5 ? 'fas fa-star text-gold' : 'far fa-star'} ${starRating === 4.5 && 'fa-star-half'}`} />
                    </Row>
                </div>
                <div className="pl-3 rating-list__meta">
                    <h4 className="text-light d-inline-block mb-0">{this.props.starRating}</h4>
                    <span className="text-light d-inline-block pl-1">({Utils.nFormatter(numberOfRatings || 0, 1)})</span>
                </div>
            </Row>
        );
    }
};

export default StarRatingListItem;

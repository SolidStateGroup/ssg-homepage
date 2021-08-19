import React from 'react';
import cn from 'classnames';
import propTypes from 'prop-types';

const _propTypes = {
    className: propTypes.string,
    children: propTypes.node,
    onClick: propTypes.func,
    icon: propTypes.string,
};

const ListItem = global.ListItem = class extends React.PureComponent {
    static displayName = 'ListItem';

    static propTypes = _propTypes;

    render() {
        const { children, ...rest } = this.props;
        return (
          <li className={cn(this.props.className, 'list-unstyled-item col-lg-6')}>
              <a href={this.listItemLink}>
                  {this.props.listItemText}
              </a>
          </li>
        );
    }
};

export default ListItem;

export const ListItemUnderlined = global.ListItemUnderlined = class extends React.PureComponent {
    static displayName = 'ListItemUnderlined';

    static propTypes = _propTypes;

    render() {
        const { children, props } = this;
        return (
          <li className={cn(props.className, 'lined-list__item list-unstyled-item')}>
              <a href={this.props.listItemLink} className="lined-list__item__link">
                  {this.props.listItemText}
              </a>
          </li>
        );
    }
};

export const WideListItem = global.ListItemUnderlined = class extends React.PureComponent {
    static displayName = 'ListItemUnderlined';

    static propTypes = _propTypes;

    render() {
        const { children, props } = this;
        return (

            <li className={cn(props.className, 'wide-list__item list-unstyled-item')}>
                <a className="wide-list__item__link">
                    {this.props.listItemText}
                </a>
            </li>
        );
    }
};

export const TextListItem = global.TextListItem = class extends React.PureComponent {
    static displayName = 'TextListItem';

    static propTypes = _propTypes;

    render() {
        const { children, props } = this;
        return (

            <li className={cn(props.className, 'text-list__item list-inline-item')}>
                {this.props.listItemText}
            </li>
        );
    }
};

export const StarRatingListItem = global.StarRatingListItem = class extends React.PureComponent {
    static displayName = 'StarRatingListItem';

    static propTypes = _propTypes;

    render() {
        const { icon, props } = this;
        return (

          // <li className={cn(props.className, 'text-list__item list-inline-item')}>
          //     {this.props.listItemText}
          // </li>

          // fab fa-app-store-ios

        <div className={cn(props.className, 'flex-row')}>
            {/*<i className="rating-list__app-store-icon text-light" />*/}
            <i className={(icon, "rating-list__app-store-icon text-light")} />
            <div className="pl-3">
                <i className="fas fa-star rating-list__star-icon text-gold" />
                <i className="fas fa-star rating-list__star-icon text-gold pl-2" />
                <i className="fas fa-star rating-list__star-icon text-gold pl-2" />
                <i className="far fa-star rating-list__star-icon text-light pl-2" />
                <i className="far fa-star rating-list__star-icon text-light pl-2" />
            </div>
            <div className="pl-3">
                <h4 className="text-light d-inline-block mb-0">3.3</h4>
                <span className="text-light d-inline-block pl-1">(4.3k)</span>
            </div>
        </div>
          // <React.Fragment>
          // </React.Fragment>


        );
    }
};

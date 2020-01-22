import React from 'react';
import cn from 'classnames';
import propTypes from 'prop-types';

const _propTypes = {
    className: propTypes.string,
    children: propTypes.node,
    onClick: propTypes.func,
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

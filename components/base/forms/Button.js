import React from 'react';
import cn from 'classnames';
import propTypes from 'prop-types';

const _propTypes = {
    className: propTypes.string,
    children: propTypes.node,
    onClick: propTypes.func,
};

const Button = global.Button = class extends React.PureComponent {
    static displayName = 'Button';

    static propTypes = _propTypes;

    render() {
        const { children, ...rest } = this.props;
        return (
            <button
              ref="button"
              type="button"
              {...rest}
              onMouseUp={this.onMouseUp}
              className={cn({
              }, (this.props.className))}
            >
                {children}
            </button>
        );
    }
};

export default Button;

export const ButtonPrimary = global.ButtonPrimary = class extends React.PureComponent {
    static displayName = 'ButtonPrimary';

    static propTypes = _propTypes;

    render() {
        const { props } = this;
        return (
            <Button
              {...props}
              className={cn(props.className, 'btn--primary')}
            />
        );
    }
};


export const ButtonSecondary = global.ButtonSecondary = class extends React.PureComponent {
    static displayName = 'ButtonSecondary';

    static propTypes = _propTypes;

    render() {
        const { props } = this;
        return (
            <Button
              {...props}
              className={cn(props.className, 'btn--secondary')}
            />
        );
    }
};

export const ButtonTertiary = global.ButtonTertiary = class extends React.PureComponent {
    static displayName = 'ButtonButtonTertiary';

    static propTypes = _propTypes;

    render() {
        const { props } = this;
        return (
          <Button
            {...props}
            className={cn(props.className, 'btn--outline-primary')}
          />
        );
    }
};

export const ButtonText = global.ButtonText = class extends React.PureComponent {
    static displayName = 'ButtonText';

    static propTypes = _propTypes;

    render() {
        const { props } = this;
        return (
          <Button
            {...props}
            className={cn(props.className, 'btn--text')}
          />
        );
    }
};
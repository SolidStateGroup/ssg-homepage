import React from 'react';
import cn from 'classnames';

const Button = global.Button = class extends React.PureComponent {
    static displayName = 'Button';

    render() {
        const { children, ...rest } = this.props;
        return (
          <button
            ref="button"
            type="button"
            {...rest}
            onMouseUp={this.onMouseUp}
            className={cn({
                'btn': true,
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

    render() {
        const { props } = this;
        return (
          <Button
            {...props}
            className={cn(props.className, 'btn btn-primary')}
          />
        );
    }
};

export const ButtonTertiary = global.ButtonTertiary = class extends React.PureComponent {
    static displayName = 'ButtonButtonTertiary';

    render() {
        const { props } = this;
        return (
          <Button
            {...props}
            className={cn(props.className, 'btn btn-outline-primary')}
          />
        );
    }
};


export const ButtonSecondary = props => (
    <Button {...props} className={`btn--secondary ${props.className || ''}`}/>
);

export const ButtonWhite = props => (
    <Button {...props} className={`white ${props.className || ''}`}/>
);

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
          >
              {this.props.buttonText}
              <svg className="ml-2" width={15} height={12} viewBox="0 0 15 12">
                  <title>{"Group Copy 8"}</title>
                  <path
                      d="M9.232.294l5.634 5.396a.426.426 0 010 .62l-5.634 5.396a.469.469 0 01-.646 0l-.269-.26a.426.426 0 010-.619L12.72 6.62H.884a.448.448 0 01-.456-.438v-.364c0-.24.205-.438.456-.438h11.835L8.32 1.173a.426.426 0 010-.62l.27-.259a.464.464 0 01.64 0z"
                      fill="#1AC0C6"
                      fillRule="nonzero"
                  />
              </svg>
          </Button>
        );
    }
};

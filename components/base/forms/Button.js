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
              type={this.props.type || 'button'}
              name="button"
              value={this.props.value || null}
              id={this.props.id || null}
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
        const { buttonText, className, ...rest } = this.props;
        return (
            <Button
              {...rest}
              className={cn(className, 'btn--text')}
            >
                {buttonText}
                <svg
                  className="ml-2" width={15} height={12}
                  viewBox="0 0 15 12"
                >
                    <title>Group Copy 8</title>
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

export const ButtonDownload = global.ButtonDownload = class extends React.PureComponent {
    static displayName = 'ButtonDownload';

    static propTypes = _propTypes;

    render() {
        const { props } = this;
        return (
            <a
              {...props}
              href={props.href || "#"}
              download
              className={cn(props.className, 'btn--download')}
            >{this.props.children}
                <div className="btn--download--circle">
                    <svg width={23} height={23} viewBox="0 0 23 23">
                        <title>download</title>
                        <path
                          d="M19.48 18.619a.865.865 0 01-.861.862.865.865 0 01-.862-.862c0-.474.388-.862.862-.862s.862.388.862.862zm-3.62-.862a.865.865 0 00-.861.862c0 .474.387.862.862.862a.865.865 0 00.862-.862.865.865 0 00-.862-.862zm6.207-2.069v4.483c0 1.047-.85 1.896-1.896 1.896H1.896A1.896 1.896 0 010 20.17v-4.483c0-1.047.85-1.896 1.896-1.896H6.18L3.75 11.36c-1.086-1.086-.315-2.944 1.22-2.944h2.27V1.724C7.24.771 8.013 0 8.966 0h4.137c.953 0 1.724.771 1.724 1.724v6.693h2.272c1.534 0 2.301 1.858 1.22 2.944l-2.432 2.43h4.285c1.047 0 1.896.85 1.896 1.897zm-11.28.763a.346.346 0 00.488 0l6.064-6.064a.346.346 0 00-.246-.59h-3.646V1.723a.346.346 0 00-.345-.345H8.965a.346.346 0 00-.345.345v8.072H4.97a.347.347 0 00-.246.591l6.064 6.064zm9.9-.763a.519.519 0 00-.516-.517h-5.664l-2.254 2.254a1.727 1.727 0 01-2.44 0L7.56 15.171H1.896a.519.519 0 00-.517.517v4.483c0 .284.233.517.517.517h18.275a.519.519 0 00.517-.517v-4.483z"
                          fill="#FFF"
                          fillRule="nonzero"
                        />
                    </svg>
                </div>
            </a>
        );
    }
};

export const ButtonHexagon = global.ButtonHexagon = class extends React.PureComponent {
    static displayName = 'ButtonHexagon';

    static propTypes = _propTypes;

    render() {
        const { props, width, height, fill, stroke } = this;
        return (
            <React.Fragment>
                <Button
                  {...props}
                  className={cn(props.className, 'btn--hexagon')}
                >

                    {this.props.ButtonHexagonActive ? (
                        <svg width={width || '100%'} height={height || 'auto'} viewBox="0 0 137 119">
                            <title>design</title>
                            <g fill="none" fillRule="evenodd">
                                <path
                                  fill="#1AC0C6"
                                  stroke="#1AC0C6"
                                  strokeWidth={2}
                                  d="M102.75.177L137 59.5l-34.25 59.323h-68.5L0 59.5 34.25.177z"
                                />
                                <g fill="#fff" fillRule="nonzero">
                                    <path d="M62.202 52.316c-6.025 0-10.927 4.902-10.927 10.926 0 6.025 4.902 10.927 10.927 10.927 6.024 0 10.926-4.902 10.926-10.927 0-6.024-4.902-10.926-10.926-10.926zm0 19.866c-4.93 0-8.94-4.01-8.94-8.94s4.01-8.94 8.94-8.94c4.928 0 8.94 4.01 8.94 8.94s-4.012 8.94-8.94 8.94z" />
                                    <path d="M83.287 66.254v4.888l7.333-4.888h1.703a5.026 5.026 0 005.02-5.02V49.185a5.026 5.026 0 00-5.02-5.02h-5.371c-.83-2.336-3.056-4.016-5.673-4.016-2.618 0-4.844 1.68-5.673 4.016h-5.372c-.343 0-.68.035-1.004.101v-7.13a5.026 5.026 0 00-5.02-5.02h-5.372c-.83-2.336-3.055-4.016-5.673-4.016s-4.844 1.68-5.673 4.016H42.12a5.026 5.026 0 00-5.02 5.02v12.05a5.026 5.026 0 005.02 5.02h8.06a14.962 14.962 0 00-.6 17.226l-1.435 1.435-1.004-1.004-8.707 8.707a4.523 4.523 0 00-1.334 3.22 4.559 4.559 0 004.554 4.554c1.217 0 2.361-.474 3.22-1.334l8.707-8.707-1.004-1.004 1.434-1.435a14.958 14.958 0 008.19 2.44c7.274 0 13.359-5.183 14.758-12.05h6.328zm4.016-20.08h5.02a3.016 3.016 0 013.013 3.011v12.05a3.016 3.016 0 01-3.013 3.011h-2.312l-4.716 3.145v-3.145h-8.084c.022-.333.051-.664.051-1.004 0-.34-.029-.67-.05-1.004h14.107V60.23c0-4.224-2.626-7.84-6.33-9.32a6.013 6.013 0 002.314-4.737zM84.215 60.23l-.614-7.687c3.3.999 5.71 4.065 5.71 7.687h-5.096zm-2.656-8.018l.64 8.018h-1.841l.64-8.015c.094-.003.186-.018.28-.018.095 0 .188.012.28.015zm-3.216 8.018h-1.385a14.944 14.944 0 00-1.993-4.944 8.006 8.006 0 013.99-2.731l-.612 7.675zm2.936-18.073a4.02 4.02 0 014.016 4.016 4.02 4.02 0 01-4.016 4.016 4.02 4.02 0 01-4.017-4.016 4.02 4.02 0 014.017-4.016zm-6.025 4.016c0 1.92.907 3.63 2.31 4.734a10.027 10.027 0 00-3.815 2.684 15.105 15.105 0 00-6.515-4.526 3.01 3.01 0 013-2.892h5.02zM59.19 34.124h5.02a3.016 3.016 0 013.013 3.013v8.058a4.994 4.994 0 00-1.939 3.307 14.872 14.872 0 00-2.077-.269v-.052c0-4.224-2.627-7.84-6.33-9.32a6.013 6.013 0 002.313-4.737zM45.132 48.181c0-3.621 2.411-6.688 5.712-7.687l-.615 7.687h-5.097zm7.753-8.018c.093-.003.186-.014.28-.014.094 0 .187.01.28.014l.64 8.018h-1.84l.64-8.018zm2.601.331c3.3 1 5.711 4.066 5.711 7.687h-5.096l-.615-7.687zm-2.321-10.386a4.02 4.02 0 014.016 4.016 4.02 4.02 0 01-4.016 4.017 4.02 4.02 0 01-4.016-4.017 4.02 4.02 0 014.016-4.016zM39.108 49.185V37.137a3.016 3.016 0 013.012-3.013h5.02c0 1.922.908 3.632 2.314 4.737-3.703 1.48-6.33 5.096-6.33 9.32v2.008H54.72a15.119 15.119 0 00-2.723 2.008H42.12a3.016 3.016 0 01-3.012-3.012zm4.347 36.406c-.481.48-1.12.745-1.8.745a2.55 2.55 0 01-2.547-2.546c0-.68.265-1.318.746-1.8l7.287-7.287 3.6 3.6-7.286 7.288zm7.702-9.712l-1.593-1.592 1.234-1.234c.491.57 1.024 1.101 1.593 1.592l-1.234 1.234zm11.045.416c-7.198 0-13.053-5.856-13.053-13.053 0-7.197 5.855-13.053 13.053-13.053 7.197 0 13.052 5.856 13.052 13.053 0 7.197-5.855 13.053-13.052 13.053z" />
                                    <path d="M96.68 72.397H78.517c-1.67 0-3.027 1.369-3.027 3.051v12.207c0 1.682 1.358 3.051 3.027 3.051h18.161c1.67 0 3.027-1.369 3.027-3.051V75.448c0-1.682-1.358-3.051-3.027-3.051zm1.008 15.258c0 .561-.453 1.017-1.009 1.017H78.518a1.014 1.014 0 01-1.01-1.017V75.448c0-.561.454-1.017 1.01-1.017h18.161c.556 0 1.01.456 1.01 1.017v12.207z" />
                                    <path d="M93.505 78.54h-2.068v6.024H89.37v-4.017h-2.067v4.017h-2.067v-2.008h-2.067v2.008h-2.067V76.53h-2.068v10.04h16.538v-2.007h-2.067zM91.437 48.181H93.8v2.363h-2.363zM91.437 52.316H93.8v2.362h-2.363zM41.234 35.778h2.363v2.363h-2.363zM41.234 39.912h2.363v2.363h-2.363z" />
                                </g>
                            </g>
                        </svg>
                    ) : (
                        <svg width={width || '100%'} height={height || 'auto'} viewBox="0 0 137 119">
                            <title>design</title>
                            <g fill="none" fillRule="evenodd">
                                <path
                                  fill="#fff"
                                  d="M102.75.177L137 59.5l-34.25 59.323h-68.5L0 59.5 34.25.177z"
                                />
                                <g fillRule="nonzero" fill="#2C2733">
                                    <path d="M62.202 52.316c-6.025 0-10.927 4.902-10.927 10.926 0 6.025 4.902 10.927 10.927 10.927 6.024 0 10.926-4.902 10.926-10.927 0-6.024-4.902-10.926-10.926-10.926zm0 19.866c-4.93 0-8.94-4.01-8.94-8.94s4.01-8.94 8.94-8.94c4.928 0 8.94 4.01 8.94 8.94s-4.012 8.94-8.94 8.94z" />
                                    <path d="M83.287 66.254v4.888l7.333-4.888h1.703a5.026 5.026 0 005.02-5.02V49.185a5.026 5.026 0 00-5.02-5.02h-5.371c-.83-2.336-3.056-4.016-5.673-4.016-2.618 0-4.844 1.68-5.673 4.016h-5.372c-.343 0-.68.035-1.004.101v-7.13a5.026 5.026 0 00-5.02-5.02h-5.372c-.83-2.336-3.055-4.016-5.673-4.016s-4.844 1.68-5.673 4.016H42.12a5.026 5.026 0 00-5.02 5.02v12.05a5.026 5.026 0 005.02 5.02h8.06a14.962 14.962 0 00-.6 17.226l-1.435 1.435-1.004-1.004-8.707 8.707a4.523 4.523 0 00-1.334 3.22 4.559 4.559 0 004.554 4.554c1.217 0 2.361-.474 3.22-1.334l8.707-8.707-1.004-1.004 1.434-1.435a14.958 14.958 0 008.19 2.44c7.274 0 13.359-5.183 14.758-12.05h6.328zm4.016-20.08h5.02a3.016 3.016 0 013.013 3.011v12.05a3.016 3.016 0 01-3.013 3.011h-2.312l-4.716 3.145v-3.145h-8.084c.022-.333.051-.664.051-1.004 0-.34-.029-.67-.05-1.004h14.107V60.23c0-4.224-2.626-7.84-6.33-9.32a6.013 6.013 0 002.314-4.737zM84.215 60.23l-.614-7.687c3.3.999 5.71 4.065 5.71 7.687h-5.096zm-2.656-8.018l.64 8.018h-1.841l.64-8.015c.094-.003.186-.018.28-.018.095 0 .188.012.28.015zm-3.216 8.018h-1.385a14.944 14.944 0 00-1.993-4.944 8.006 8.006 0 013.99-2.731l-.612 7.675zm2.936-18.073a4.02 4.02 0 014.016 4.016 4.02 4.02 0 01-4.016 4.016 4.02 4.02 0 01-4.017-4.016 4.02 4.02 0 014.017-4.016zm-6.025 4.016c0 1.92.907 3.63 2.31 4.734a10.027 10.027 0 00-3.815 2.684 15.105 15.105 0 00-6.515-4.526 3.01 3.01 0 013-2.892h5.02zM59.19 34.124h5.02a3.016 3.016 0 013.013 3.013v8.058a4.994 4.994 0 00-1.939 3.307 14.872 14.872 0 00-2.077-.269v-.052c0-4.224-2.627-7.84-6.33-9.32a6.013 6.013 0 002.313-4.737zM45.132 48.181c0-3.621 2.411-6.688 5.712-7.687l-.615 7.687h-5.097zm7.753-8.018c.093-.003.186-.014.28-.014.094 0 .187.01.28.014l.64 8.018h-1.84l.64-8.018zm2.601.331c3.3 1 5.711 4.066 5.711 7.687h-5.096l-.615-7.687zm-2.321-10.386a4.02 4.02 0 014.016 4.016 4.02 4.02 0 01-4.016 4.017 4.02 4.02 0 01-4.016-4.017 4.02 4.02 0 014.016-4.016zM39.108 49.185V37.137a3.016 3.016 0 013.012-3.013h5.02c0 1.922.908 3.632 2.314 4.737-3.703 1.48-6.33 5.096-6.33 9.32v2.008H54.72a15.119 15.119 0 00-2.723 2.008H42.12a3.016 3.016 0 01-3.012-3.012zm4.347 36.406c-.481.48-1.12.745-1.8.745a2.55 2.55 0 01-2.547-2.546c0-.68.265-1.318.746-1.8l7.287-7.287 3.6 3.6-7.286 7.288zm7.702-9.712l-1.593-1.592 1.234-1.234c.491.57 1.024 1.101 1.593 1.592l-1.234 1.234zm11.045.416c-7.198 0-13.053-5.856-13.053-13.053 0-7.197 5.855-13.053 13.053-13.053 7.197 0 13.052 5.856 13.052 13.053 0 7.197-5.855 13.053-13.052 13.053z" />
                                    <path d="M96.68 72.397H78.517c-1.67 0-3.027 1.369-3.027 3.051v12.207c0 1.682 1.358 3.051 3.027 3.051h18.161c1.67 0 3.027-1.369 3.027-3.051V75.448c0-1.682-1.358-3.051-3.027-3.051zm1.008 15.258c0 .561-.453 1.017-1.009 1.017H78.518a1.014 1.014 0 01-1.01-1.017V75.448c0-.561.454-1.017 1.01-1.017h18.161c.556 0 1.01.456 1.01 1.017v12.207z" />
                                    <path d="M93.505 78.54h-2.068v6.024H89.37v-4.017h-2.067v4.017h-2.067v-2.008h-2.067v2.008h-2.067V76.53h-2.068v10.04h16.538v-2.007h-2.067zM91.437 48.181H93.8v2.363h-2.363zM91.437 52.316H93.8v2.362h-2.363zM41.234 35.778h2.363v2.363h-2.363zM41.234 39.912h2.363v2.363h-2.363z" />
                                </g>
                            </g>
                        </svg>
                    )}
                </Button>
                <h5 className="text-center btn--hexagon__title">{this.props.buttonText}</h5>
            </React.Fragment>
        );
    }
};


export const ButtonHexagonDesign = global.ButtonHexagonDesign = class extends React.PureComponent {
    static displayName = 'ButtonHexagonDesign';

    static propTypes = _propTypes;

    render() {
        const { props, width, height, fill, stroke } = this;
        return (
            <React.Fragment>
                <Button
                  {...props}
                  className={cn(props.className, 'btn--hexagon')}
                >

                    {this.props.ButtonHexagonActive ? (
                        <svg width={width || '100%'} height={height || 'auto'} viewBox="0 0 137 119">
                            <title>dev</title>
                            <g fill="none" fillRule="evenodd">
                                <path
                                  stroke="#1AC0C6"
                                  strokeWidth={2}
                                  fill="#1AC0C6"
                                  d="M102.75.177L137 59.5l-34.25 59.323h-68.5L0 59.5 34.25.177z"
                                />
                                <g fill="#fff" fillRule="nonzero">
                                    <path d="M57.529 34.37c-6.597 0-12.154 4.533-13.72 10.647a14.143 14.143 0 00-.441 3.513c0 7.808 6.352 14.16 14.16 14.16 7.809 0 14.161-6.352 14.161-14.16s-6.352-14.16-14.16-14.16zm-1.132 20.109a1.16 1.16 0 100 2.32h9.595a11.804 11.804 0 01-8.463 3.57c-6.529 0-11.84-5.31-11.84-11.84 0-.693.06-1.372.176-2.033h5.054c.271 0 .422.161.487.257.066.097.16.296.062.548l-.081.206a2.909 2.909 0 002.71 3.975h4.39a1.16 1.16 0 100-2.321h-4.39a.576.576 0 01-.488-.258.576.576 0 01-.061-.547l.08-.206a2.909 2.909 0 00-2.71-3.976H46.52c1.74-4.379 6.018-7.483 11.01-7.483 3.839 0 7.257 1.837 9.421 4.678h-6.867a1.16 1.16 0 100 2.322h8.25a11.77 11.77 0 011.035 4.839c0 2.167-.586 4.2-1.607 5.949H56.397zM89.647 73.015a1.17 1.17 0 00-.82-.34 1.17 1.17 0 00-.822.34c-.215.217-.34.515-.34.82 0 .306.125.605.34.822.216.216.516.34.821.34.305 0 .605-.124.82-.34a1.164 1.164 0 000-1.642z" />
                                    <path d="M94.948 78.316l-2.457-2.457a1.161 1.161 0 00-1.642 1.642l2.457 2.457c.581.58.901 1.353.901 2.175 0 .821-.32 1.594-.9 2.174a3.08 3.08 0 01-4.35 0l-9.336-9.335 4.35-4.35 1.133 1.133a1.161 1.161 0 001.641-1.641l-4.93-4.93a2.94 2.94 0 00-2.092-.868 2.94 2.94 0 00-2.092.867l-.904.904-3.567-3.567a20.576 20.576 0 005.261-13.758c0-11.392-9.268-20.66-20.66-20.66-11.393 0-20.661 9.268-20.661 20.66s9.268 20.66 20.66 20.66c5.28 0 10.103-1.99 13.759-5.26l3.567 3.566-.904.904a2.94 2.94 0 00-.867 2.092c0 .79.308 1.533.867 2.092l2.976 2.976.001.002 10.156 10.155a5.381 5.381 0 003.816 1.578 5.381 5.381 0 003.817-1.578 5.404 5.404 0 000-7.633zM57.76 67.1c-10.113 0-18.34-8.227-18.34-18.339 0-10.112 8.227-18.34 18.34-18.34 10.112 0 18.339 8.228 18.339 18.34s-8.227 18.34-18.34 18.34zm18.063 4.074a.633.633 0 010-.901l3.448-3.45a.633.633 0 01.901 0l2.156 2.157-4.35 4.35-2.155-2.156zM56.01 75.813a1.17 1.17 0 00-.142-.033 8.086 8.086 0 00-1.524-2.12 8.072 8.072 0 00-5.745-2.379c-2.17 0-4.21.845-5.745 2.38a8.137 8.137 0 00-1.544 2.151c-.095.006-.19.022-.286.052-3.243 1.043-3.924 2.502-3.924 3.542 0 1.699 1.749 2.896 4.232 3.637a8.14 8.14 0 001.522 2.108 8.1 8.1 0 005.745 2.376 8.1 8.1 0 007.263-4.483c2.485-.74 4.236-1.938 4.236-3.638 0-1.064-.709-2.55-4.088-3.593zm-15.491 4.445c-.838-.412-1.086-.763-1.098-.85.012-.089.26-.441 1.098-.854a8.258 8.258 0 000 1.704zm4.214 3.475c1.257.16 2.573.238 3.866.238 1.293 0 2.609-.078 3.867-.238a5.812 5.812 0 01-7.733 0zm9.418-2.643c-1.616.363-3.537.56-5.552.56-2.015 0-3.936-.197-5.552-.56a5.809 5.809 0 011.448-5.788 5.766 5.766 0 014.104-1.7c1.55 0 3.008.604 4.104 1.7a5.809 5.809 0 011.448 5.788zm2.523-.83c.06-.568.06-1.14 0-1.709.84.412 1.091.765 1.103.853-.012.09-.26.444-1.103.856zM89.332 28.101c-3.968 0-7.196 3.229-7.196 7.197s3.228 7.196 7.196 7.196c3.968 0 7.197-3.228 7.197-7.196 0-3.968-3.229-7.197-7.197-7.197zm0 12.072a4.88 4.88 0 01-4.875-4.875 4.88 4.88 0 014.875-4.875 4.88 4.88 0 014.875 4.875 4.88 4.88 0 01-4.875 4.875z" />
                                    <path d="M93.749 57.01L89.92 53.18a1.16 1.16 0 00-1.642 0l-3.828 3.828a1.16 1.16 0 000 1.642l3.828 3.828a1.16 1.16 0 001.642 0l3.828-3.828a1.16 1.16 0 000-1.642zM89.1 60.016l-2.187-2.187 2.187-2.186 2.187 2.186-2.187 2.187zM63.808 49.501a1.165 1.165 0 00-1.642 0 1.166 1.166 0 000 1.641c.217.216.515.34.821.34.306 0 .605-.124.821-.34a1.17 1.17 0 00.34-.82c0-.306-.124-.605-.34-.82zM70.42 80.093a1.17 1.17 0 00-.82-.34c-.305 0-.605.124-.82.34a1.17 1.17 0 00-.34.82c0 .306.123.606.34.821.215.216.515.34.82.34.305 0 .605-.124.82-.34.217-.215.34-.515.34-.82a1.17 1.17 0 00-.34-.82zM86.555 47.007a1.168 1.168 0 00-.821-.339c-.305 0-.605.123-.82.339-.217.217-.34.517-.34.822 0 .305.123.605.34.82.215.216.515.34.82.34.305 0 .605-.124.82-.34a1.17 1.17 0 00.34-.82c0-.305-.124-.605-.34-.822zM95.5 68.79a1.17 1.17 0 00-.82-.34c-.307 0-.605.124-.822.34a1.166 1.166 0 000 1.641 1.165 1.165 0 001.983-.82 1.17 1.17 0 00-.34-.82z" />
                                </g>
                            </g>
                        </svg>
                    ) : (
                        <svg width={width || '100%'} height={height || 'auto'} viewBox="0 0 137 119">
                            <title>dev</title>
                            <g fill="none" fillRule="evenodd">
                                <path
                                  fill="#fff"
                                  d="M102.75.177L137 59.5l-34.25 59.323h-68.5L0 59.5 34.25.177z"
                                />
                                <g fillRule="nonzero" fill="#2C2733">
                                    <path d="M57.529 34.37c-6.597 0-12.154 4.533-13.72 10.647a14.143 14.143 0 00-.441 3.513c0 7.808 6.352 14.16 14.16 14.16 7.809 0 14.161-6.352 14.161-14.16s-6.352-14.16-14.16-14.16zm-1.132 20.109a1.16 1.16 0 100 2.32h9.595a11.804 11.804 0 01-8.463 3.57c-6.529 0-11.84-5.31-11.84-11.84 0-.693.06-1.372.176-2.033h5.054c.271 0 .422.161.487.257.066.097.16.296.062.548l-.081.206a2.909 2.909 0 002.71 3.975h4.39a1.16 1.16 0 100-2.321h-4.39a.576.576 0 01-.488-.258.576.576 0 01-.061-.547l.08-.206a2.909 2.909 0 00-2.71-3.976H46.52c1.74-4.379 6.018-7.483 11.01-7.483 3.839 0 7.257 1.837 9.421 4.678h-6.867a1.16 1.16 0 100 2.322h8.25a11.77 11.77 0 011.035 4.839c0 2.167-.586 4.2-1.607 5.949H56.397zM89.647 73.015a1.17 1.17 0 00-.82-.34 1.17 1.17 0 00-.822.34c-.215.217-.34.515-.34.82 0 .306.125.605.34.822.216.216.516.34.821.34.305 0 .605-.124.82-.34a1.164 1.164 0 000-1.642z" />
                                    <path d="M94.948 78.316l-2.457-2.457a1.161 1.161 0 00-1.642 1.642l2.457 2.457c.581.58.901 1.353.901 2.175 0 .821-.32 1.594-.9 2.174a3.08 3.08 0 01-4.35 0l-9.336-9.335 4.35-4.35 1.133 1.133a1.161 1.161 0 001.641-1.641l-4.93-4.93a2.94 2.94 0 00-2.092-.868 2.94 2.94 0 00-2.092.867l-.904.904-3.567-3.567a20.576 20.576 0 005.261-13.758c0-11.392-9.268-20.66-20.66-20.66-11.393 0-20.661 9.268-20.661 20.66s9.268 20.66 20.66 20.66c5.28 0 10.103-1.99 13.759-5.26l3.567 3.566-.904.904a2.94 2.94 0 00-.867 2.092c0 .79.308 1.533.867 2.092l2.976 2.976.001.002 10.156 10.155a5.381 5.381 0 003.816 1.578 5.381 5.381 0 003.817-1.578 5.404 5.404 0 000-7.633zM57.76 67.1c-10.113 0-18.34-8.227-18.34-18.339 0-10.112 8.227-18.34 18.34-18.34 10.112 0 18.339 8.228 18.339 18.34s-8.227 18.34-18.34 18.34zm18.063 4.074a.633.633 0 010-.901l3.448-3.45a.633.633 0 01.901 0l2.156 2.157-4.35 4.35-2.155-2.156zM56.01 75.813a1.17 1.17 0 00-.142-.033 8.086 8.086 0 00-1.524-2.12 8.072 8.072 0 00-5.745-2.379c-2.17 0-4.21.845-5.745 2.38a8.137 8.137 0 00-1.544 2.151c-.095.006-.19.022-.286.052-3.243 1.043-3.924 2.502-3.924 3.542 0 1.699 1.749 2.896 4.232 3.637a8.14 8.14 0 001.522 2.108 8.1 8.1 0 005.745 2.376 8.1 8.1 0 007.263-4.483c2.485-.74 4.236-1.938 4.236-3.638 0-1.064-.709-2.55-4.088-3.593zm-15.491 4.445c-.838-.412-1.086-.763-1.098-.85.012-.089.26-.441 1.098-.854a8.258 8.258 0 000 1.704zm4.214 3.475c1.257.16 2.573.238 3.866.238 1.293 0 2.609-.078 3.867-.238a5.812 5.812 0 01-7.733 0zm9.418-2.643c-1.616.363-3.537.56-5.552.56-2.015 0-3.936-.197-5.552-.56a5.809 5.809 0 011.448-5.788 5.766 5.766 0 014.104-1.7c1.55 0 3.008.604 4.104 1.7a5.809 5.809 0 011.448 5.788zm2.523-.83c.06-.568.06-1.14 0-1.709.84.412 1.091.765 1.103.853-.012.09-.26.444-1.103.856zM89.332 28.101c-3.968 0-7.196 3.229-7.196 7.197s3.228 7.196 7.196 7.196c3.968 0 7.197-3.228 7.197-7.196 0-3.968-3.229-7.197-7.197-7.197zm0 12.072a4.88 4.88 0 01-4.875-4.875 4.88 4.88 0 014.875-4.875 4.88 4.88 0 014.875 4.875 4.88 4.88 0 01-4.875 4.875z" />
                                    <path d="M93.749 57.01L89.92 53.18a1.16 1.16 0 00-1.642 0l-3.828 3.828a1.16 1.16 0 000 1.642l3.828 3.828a1.16 1.16 0 001.642 0l3.828-3.828a1.16 1.16 0 000-1.642zM89.1 60.016l-2.187-2.187 2.187-2.186 2.187 2.186-2.187 2.187zM63.808 49.501a1.165 1.165 0 00-1.642 0 1.166 1.166 0 000 1.641c.217.216.515.34.821.34.306 0 .605-.124.821-.34a1.17 1.17 0 00.34-.82c0-.306-.124-.605-.34-.82zM70.42 80.093a1.17 1.17 0 00-.82-.34c-.305 0-.605.124-.82.34a1.17 1.17 0 00-.34.82c0 .306.123.606.34.821.215.216.515.34.82.34.305 0 .605-.124.82-.34.217-.215.34-.515.34-.82a1.17 1.17 0 00-.34-.82zM86.555 47.007a1.168 1.168 0 00-.821-.339c-.305 0-.605.123-.82.339-.217.217-.34.517-.34.822 0 .305.123.605.34.82.215.216.515.34.82.34.305 0 .605-.124.82-.34a1.17 1.17 0 00.34-.82c0-.305-.124-.605-.34-.822zM95.5 68.79a1.17 1.17 0 00-.82-.34c-.307 0-.605.124-.822.34a1.166 1.166 0 000 1.641 1.165 1.165 0 001.983-.82 1.17 1.17 0 00-.34-.82z" />
                                </g>
                            </g>
                        </svg>
                    )}
                </Button>
                <h5 className="text-center btn--hexagon__title">{this.props.buttonText}</h5>
            </React.Fragment>
        );
    }
};

export const ButtonHexagonMobile = global.ButtonHexagonMobile = class extends React.PureComponent {
    static displayName = 'ButtonHexagonMobile';

    static propTypes = _propTypes;

    render() {
        const { props, width, height, fill, stroke } = this;
        return (
            <React.Fragment>
                <Button
                  {...props}
                  className={cn(props.className, 'btn--hexagon')}
                >

                    {this.props.ButtonHexagonActive ? (
                        <svg width={width || '100%'} height={height || 'auto'} viewBox="0 0 137 119">
                            <title>design</title>
                            <g fill="none" fillRule="evenodd">
                                <path
                                  stroke="#1AC0C6"
                                  strokeWidth={2}
                                  fill="#1AC0C6"
                                  d="M101.75 1.91L135 59.5l-33.25 57.59h-66.5L2 59.5 35.25 1.91z"
                                />
                                <g fill="#fff" fillRule="nonzero">
                                    <path d="M84.967 75.905h-1.996v3.991H65.01v1.996H82.97v2.994a2.994 2.994 0 01-2.994 2.994H58.023a3.005 3.005 0 01-2.595-1.497l-1.728.998a5.01 5.01 0 004.323 2.495h21.954a4.996 4.996 0 004.99-4.99v-8.981z" />
                                    <path d="M68.002 83.888h1.996v1.996h-1.996zM73.99 56.944v-1.996h-3.045a12.975 12.975 0 00-11.924-11.924v-3.045h-1.996v3.045a12.97 12.97 0 00-1.996.311v-5.352h15.967v-1.995H55.03v-.998a2.994 2.994 0 012.994-2.994h21.954c.73 0 1.434.266 1.98.748l1.32-1.497a4.983 4.983 0 00-3.3-1.247H58.023a4.996 4.996 0 00-4.99 4.99v8.981a12.99 12.99 0 00-7.932 10.977h-3.045v1.996h3.047a12.915 12.915 0 0011.922 11.93v3.039h1.996v-3.04a12.915 12.915 0 0011.922-11.929h3.047zm-16.965 7.984v1.95a10.935 10.935 0 01-3.992-1.152V63.93a4.99 4.99 0 019.98 0v1.796a10.946 10.946 0 01-3.992 1.155v-1.953h-1.996zM55.03 53.95a2.994 2.994 0 115.988 0 2.994 2.994 0 01-5.988 0zm10.312 10.18c-.108.099-.223.179-.332.27v-.47a6.985 6.985 0 00-3.771-6.196 4.99 4.99 0 10-6.43 0 6.985 6.985 0 00-3.77 6.196v.476c-.111-.091-.226-.176-.333-.272a10.983 10.983 0 01-3.606-7.19h1.943v-1.996h-1.946a10.988 10.988 0 019.93-9.928v1.945h1.995V45.02c5.268.487 9.44 4.66 9.929 9.928h-1.946v1.996h1.943a10.983 10.983 0 01-3.606 7.19v-.005z" />
                                    <path d="M95.944 47.963a.998.998 0 00.998-.998V34.99a.998.998 0 00-.998-.998H73.99a.998.998 0 00-.998.998v11.975c0 .55.447.998.998.998h21.954zM74.988 35.988h19.958v9.979H74.988v-9.98z" />
                                    <path d="M76.984 37.983h3.991v1.996h-3.991zM82.971 37.983h9.98v1.996h-9.98zM76.984 41.975H92.95v1.996H76.984zM95.768 49.959a3.164 3.164 0 00-2.096.798l-8.705 7.674V49.96h-1.996v9.979h.289l-5.677 5.01a6.985 6.985 0 00-6.587 6.965v1.76a2.595 2.595 0 01-1.444 2.337.998.998 0 00.446 1.89h6.986a6.985 6.985 0 006.965-6.586l14.197-16.089a3.17 3.17 0 00-2.378-5.266zM76.984 75.905H72.42a4.604 4.604 0 00.572-2.231v-1.761c.003-2.6 2-4.763 4.59-4.974l4.375 4.375a4.996 4.996 0 01-4.973 4.59zm19.665-22L82.926 69.458l-3.487-3.487L94.99 52.248a1.175 1.175 0 011.658 1.657zM40.06 84.886h21.955a.998.998 0 00.998-.998v-7.983a.998.998 0 00-.998-.998h-6.986v-4.99h-1.996v4.99H40.06a.998.998 0 00-.998.998v7.983c0 .551.447.998.998.998zm.998-7.983h19.959v5.987H41.058v-5.987z" />
                                    <path d="M43.054 78.899h4.99v1.995h-4.99zM50.04 78.899h8.981v1.995H50.04zM40.06 43.971h9.98a.998.998 0 00.998-.998V34.99a.998.998 0 00-.998-.998h-9.98a.998.998 0 00-.998.998v7.983c0 .551.447.998.998.998zm.998-7.983h7.984v5.987h-7.984v-5.987z" />
                                    <path d="M43.054 37.983h3.992v1.996h-3.992z" />
                                </g>
                            </g>
                        </svg>
                    ) : (
                        <svg width={width || '100%'} height={height || 'auto'} viewBox="0 0 133 117">
                            <g fill="none" fillRule="evenodd">
                                <path
                                  fill={fill || '#fff'}
                                  d="M99.75.91L133 58.5l-33.25 57.59h-66.5L0 58.5 33.25.91z"
                                />
                                <g fillRule="nonzero" fill="#2C2733">
                                    <path d="M82.967 74.905h-1.996v3.991H63.01v1.996H80.97v2.994a2.994 2.994 0 01-2.994 2.994H56.023a3.005 3.005 0 01-2.595-1.497l-1.728.998a5.01 5.01 0 004.323 2.495h21.954a4.996 4.996 0 004.99-4.99v-8.981z" />
                                    <path d="M66.002 82.888h1.996v1.996h-1.996zM71.99 55.944v-1.996h-3.045a12.975 12.975 0 00-11.924-11.924v-3.045h-1.996v3.045a12.97 12.97 0 00-1.996.311v-5.352h15.967v-1.995H53.03v-.998a2.994 2.994 0 012.994-2.994h21.954c.73 0 1.434.266 1.98.748l1.32-1.497a4.983 4.983 0 00-3.3-1.247H56.023a4.996 4.996 0 00-4.99 4.99v8.981a12.99 12.99 0 00-7.932 10.977h-3.045v1.996h3.047a12.915 12.915 0 0011.922 11.93v3.039h1.996v-3.04a12.915 12.915 0 0011.922-11.929h3.047zm-16.965 7.984v1.95a10.935 10.935 0 01-3.992-1.152V62.93a4.99 4.99 0 019.98 0v1.796a10.946 10.946 0 01-3.992 1.155v-1.953h-1.996zM53.03 52.95a2.994 2.994 0 115.988 0 2.994 2.994 0 01-5.988 0zm10.312 10.18c-.108.099-.223.179-.332.27v-.47a6.985 6.985 0 00-3.771-6.196 4.99 4.99 0 10-6.43 0 6.985 6.985 0 00-3.77 6.196v.476c-.111-.091-.226-.176-.333-.272a10.983 10.983 0 01-3.606-7.19h1.943v-1.996h-1.946a10.988 10.988 0 019.93-9.928v1.945h1.995V44.02c5.268.487 9.44 4.66 9.929 9.928h-1.946v1.996h1.943a10.983 10.983 0 01-3.606 7.19v-.005z" />
                                    <path d="M93.944 46.963a.998.998 0 00.998-.998V33.99a.998.998 0 00-.998-.998H71.99a.998.998 0 00-.998.998v11.975c0 .55.447.998.998.998h21.954zM72.988 34.988h19.958v9.979H72.988v-9.98z" />
                                    <path d="M74.984 36.983h3.991v1.996h-3.991zM80.971 36.983h9.98v1.996h-9.98zM74.984 40.975H90.95v1.996H74.984zM93.768 48.959a3.164 3.164 0 00-2.096.798l-8.705 7.674V48.96h-1.996v9.979h.289l-5.677 5.01a6.985 6.985 0 00-6.587 6.965v1.76a2.595 2.595 0 01-1.444 2.337.998.998 0 00.446 1.89h6.986a6.985 6.985 0 006.965-6.586l14.197-16.089a3.17 3.17 0 00-2.378-5.266zM74.984 74.905H70.42a4.604 4.604 0 00.572-2.231v-1.761c.003-2.6 2-4.763 4.59-4.974l4.375 4.375a4.996 4.996 0 01-4.973 4.59zm19.665-22L80.926 68.458l-3.487-3.487L92.99 51.248a1.175 1.175 0 011.658 1.657zM38.06 83.886h21.955a.998.998 0 00.998-.998v-7.983a.998.998 0 00-.998-.998h-6.986v-4.99h-1.996v4.99H38.06a.998.998 0 00-.998.998v7.983c0 .551.447.998.998.998zm.998-7.983h19.959v5.987H39.058v-5.987z" />
                                    <path d="M41.054 77.899h4.99v1.995h-4.99zM48.04 77.899h8.981v1.995H48.04zM38.06 42.971h9.98a.998.998 0 00.998-.998V33.99a.998.998 0 00-.998-.998h-9.98a.998.998 0 00-.998.998v7.983c0 .551.447.998.998.998zm.998-7.983h7.984v5.987h-7.984v-5.987z" />
                                    <path d="M41.054 36.983h3.992v1.996h-3.992z" />
                                </g>
                            </g>
                        </svg>
                    )}
                </Button>
                <h5 className="text-center btn--hexagon__title">{this.props.buttonText}</h5>
            </React.Fragment>
        );
    }
};

export const ButtonHexagonWeb = global.ButtonHexagonWeb = class extends React.PureComponent {
    static displayName = 'ButtonHexagonWeb';

    static propTypes = _propTypes;

    render() {
        const { props, width, height, fill, stroke } = this;
        return (
            <React.Fragment>
                <Button
                  {...props}
                  className={cn(props.className, 'btn--hexagon')}
                >

                    {this.props.ButtonHexagonActive ? (
                        <svg width={width || '100%'} height={height || 'auto'} viewBox="0 0 137 119">
                            <title>dev</title>
                            <g fill="none" fillRule="evenodd">
                                <path
                                  stroke="#1AC0C6"
                                  strokeWidth={2}
                                  fill="#1AC0C6"
                                  d="M102.75.177L137 59.5l-34.25 59.323h-68.5L0 59.5 34.25.177z"
                                />
                                <g fill="#fff" fillRule="nonzero">
                                    <path d="M86.1 28.1h-38a5.006 5.006 0 00-5 5v27a5.006 5.006 0 005 5h13.674l-1.428 5H57.1v2h20v-2h-3.246l-1.428-5H86.1a5.006 5.006 0 005-5v-27a5.006 5.006 0 00-5-5zm-23.674 42l1.428-5h6.492l1.428 5h-9.348zm26.674-10a3 3 0 01-3 3h-38a3 3 0 01-3-3v-2h44v2zm0-4h-44v-23a3 3 0 013-3h38a3 3 0 013 3v23zM75.1 74.1h-28a1 1 0 00-1 1v12a1 1 0 001 1h28a1 1 0 001-1v-12a1 1 0 00-1-1zm-1 12h-26v-10h26v10z" />
                                    <path d="M50.1 82.1h2v2h-2zM50.1 78.1h2v2h-2zM54.1 78.1h2v2h-2zM58.1 78.1h2v2h-2zM66.1 78.1h2v2h-2zM62.1 78.1h2v2h-2zM70.1 82.1h2v2h-2zM70.1 78.1h2v2h-2zM54.1 82.1h14v2h-14zM83.1 74.1a5 5 0 00-5 5v4a5 5 0 0010 0v-4a5 5 0 00-5-5zm3 9a3 3 0 11-6 0v-4a3 3 0 116 0v4z" />
                                    <path d="M82.1 78.1h2v2h-2zM64.13 50.838l4.004-13.992 1.922.55-4.004 13.992zM61.74 39.868l-1.28-1.536-6 5a1 1 0 000 1.536l6 5 1.28-1.536-5.078-4.232 5.078-4.232zM79.867 43.46a.999.999 0 00-.127-.128l-6-5-1.28 1.536 5.078 4.232-5.078 4.232 1.28 1.536 6-5a1 1 0 00.127-1.409z" />
                                </g>
                            </g>
                        </svg>
                    ) : (
                        <svg width={width || '100%'} height={height || 'auto'} viewBox="0 0 137 119">
                            <title>dev</title>
                            <g fill="none" fillRule="evenodd">
                                <path
                                  fill="#fff"
                                  d="M102.75.177L137 59.5l-34.25 59.323h-68.5L0 59.5 34.25.177z"
                                />
                                <g fillRule="nonzero" fill="#2C2733">
                                    <path d="M86.1 28.1h-38a5.006 5.006 0 00-5 5v27a5.006 5.006 0 005 5h13.674l-1.428 5H57.1v2h20v-2h-3.246l-1.428-5H86.1a5.006 5.006 0 005-5v-27a5.006 5.006 0 00-5-5zm-23.674 42l1.428-5h6.492l1.428 5h-9.348zm26.674-10a3 3 0 01-3 3h-38a3 3 0 01-3-3v-2h44v2zm0-4h-44v-23a3 3 0 013-3h38a3 3 0 013 3v23zM75.1 74.1h-28a1 1 0 00-1 1v12a1 1 0 001 1h28a1 1 0 001-1v-12a1 1 0 00-1-1zm-1 12h-26v-10h26v10z" />
                                    <path d="M50.1 82.1h2v2h-2zM50.1 78.1h2v2h-2zM54.1 78.1h2v2h-2zM58.1 78.1h2v2h-2zM66.1 78.1h2v2h-2zM62.1 78.1h2v2h-2zM70.1 82.1h2v2h-2zM70.1 78.1h2v2h-2zM54.1 82.1h14v2h-14zM83.1 74.1a5 5 0 00-5 5v4a5 5 0 0010 0v-4a5 5 0 00-5-5zm3 9a3 3 0 11-6 0v-4a3 3 0 116 0v4z" />
                                    <path d="M82.1 78.1h2v2h-2zM64.13 50.838l4.004-13.992 1.922.55-4.004 13.992zM61.74 39.868l-1.28-1.536-6 5a1 1 0 000 1.536l6 5 1.28-1.536-5.078-4.232 5.078-4.232zM79.867 43.46a.999.999 0 00-.127-.128l-6-5-1.28 1.536 5.078 4.232-5.078 4.232 1.28 1.536 6-5a1 1 0 00.127-1.409z" />
                                </g>
                            </g>
                        </svg>
                    )}
                </Button>
                <h5 className="text-center btn--hexagon__title">{this.props.buttonText}</h5>
            </React.Fragment>
        );
    }
};

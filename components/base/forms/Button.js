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
              name="button"
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

export const ButtonHexagon = global.ButtonHexagon = class extends React.PureComponent {
    static displayName = 'ButtonHexagon';

    static propTypes = _propTypes;

    render() {
        const { props, width, height, fill } = this;
        return (
            <React.Fragment>
                <Button
                    {...props}
                    className={cn(props.className, 'hexagon')}
                >

                    {this.props.ButtonHexagonActive ? (
                        <svg width={width || '100%'} height={height || 'auto%'} viewBox="0 0 137 119" {...props}>
                            <title>{"design"}</title>
                            <g fill="none" fillRule="evenodd">
                                <path
                                    stroke="#1AC0C6"
                                    strokeWidth={2}
                                    fill="#201C26"
                                    d="M101.75 1.91L135 59.5l-33.25 57.59h-66.5L2 59.5 35.25 1.91z"
                                />
                                <g fill="#1AC0C6" fillRule="nonzero">
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
                                    fill={fill || '#201C26'}
                                    d="M99.75.91L133 58.5l-33.25 57.59h-66.5L0 58.5 33.25.91z"
                                />
                                <g fillRule="nonzero" fill="#786F84">
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
                <h5 className="text-center">{this.props.buttonText}</h5>
            </React.Fragment>
        );
    }
};










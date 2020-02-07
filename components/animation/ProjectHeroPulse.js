import React from 'react';
import cn from 'classnames';
import propTypes from 'prop-types';
import { gsap } from 'gsap';

const _propTypes = {
    className: propTypes.string,
    children: propTypes.node,
    onClick: propTypes.func,
    ButtonComponent: propTypes.any,
};

const ProjectHeroPulse = global.ProjectHeroPulse = class extends React.PureComponent {

    // componentDidMount(){
    //     this.myPulseTween = gsap.from(this.myElement, { duration: 0.5, opacity: 0, y: -20, stagger: 0.25 })
    //
    //     ;
    // }

    componentDidMount(){
        this.myPulseTween
            .from(".pulse-circle__large", { duration: .25, opacity: 0, stagger: 0.25 })
    }

    constructor(props){
        super(props);
        this.myElement = null;
        this.myPulseTween = gsap;
    }



    // constructor(props){
    //     super(props);
    //     // reference to the DOM node
    //     this.myElement = null;
    //     // reference to the animation
    //     this.myPulseTween = null;
    // }

    static displayName = 'ProjectHeroPulse';

    static propTypes = _propTypes;

    // static defaultProps = {
    //     ButtonComponent: ButtonSecondary,
    // };

    render() {
        const { children } = this.props;
        return (
            <React.Fragment>

                <svg ref={div => this.myElement = div} className={cn(this.props.className, ' project-hero--animation-container')} width={729} height={729} viewBox="0 0 729 729">
                    <title>{"pulse"}</title>
                    <g fill="#FFF" fillRule="evenodd" opacity={0.319}>
                        <circle className="pulse-circle__large" opacity={0.319} cx={364.5} cy={364.5} r={364.5} />
                        <circle className="pulse-circle__large" opacity={0.499} cx={363.5} cy={365.5} r={273.5} />
                        <circle className="pulse-circle__large" opacity={0.584} cx={364.5} cy={364.5} r={182.5} />
                    </g>
                </svg>

            </React.Fragment>
        );
    }
};
export default ProjectHeroPulse;

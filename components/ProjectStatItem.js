import React from 'react';
import cn from 'classnames';
import propTypes from 'prop-types';

const _propTypes = {
    className: propTypes.string,
    children: propTypes.node,
};

const ProjectStatItem = global.ProjectStatItem = class extends React.PureComponent {
    static displayName = 'ProjectStatItem';

    static propTypes = _propTypes;

    static defaultProps = {

    };

    render() {
        const { children, ButtonComponent, ...rest } = this.props;
        return (
            <div className={cn(this.props.className)}>
                <h1 className="text-grey text-center">{this.props.heading || '30,000+'}</h1>
                <p className="text-center mt-4">{this.props.text || 'Awesome stat text here'}</p>
            </div>
        );
    }
};
export default ProjectStatItem;

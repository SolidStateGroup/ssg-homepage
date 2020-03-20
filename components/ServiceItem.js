import React from 'react';
import cn from 'classnames';
import propTypes from 'prop-types';
import {ButtonSecondary} from './base/forms/Button';
import Link from 'next/link';

const _propTypes = {
    className: propTypes.string,
    children: propTypes.node,
    onClick: propTypes.func,
    ButtonComponent: propTypes.any,
};

const ServiceItem = global.ServiceItem = class extends React.PureComponent {
    static displayName = 'ServiceItem';

    static propTypes = _propTypes;

    static defaultProps = {
        ButtonComponent: ButtonSecondary,
    };

    render() {
        const {children, ButtonComponent, ...rest} = this.props;
        return (

            <div
                className={cn(this.props.className, ' row flex-row d-flex align-items-center section--large-padding mb-5')}>
                <div className="col-md-5 offset-md-1 pr-5">
                    <h3 className="title--line-after">{this.props.subTitle || 'Web Application Development'}</h3>
                    <p>{this.props.serviceDescription || 'We work with you to iterate on the various creative deliverables until you achieve your vision.'}</p>
                    {this.props.serviceListItem ? (
                        <div>
                            <h6 className="mt-4 text-grey mb0">{this.props.listTitle || 'Examples'}</h6>
                            <ul className="lined-list list-unstyled flex-row">
                                {this.props.serviceListItem}
                            </ul>
                        </div>
                    ) : (
                        null
                    )}

                    {this.props.serviceLink ? (

                        <Link prefetch={false} href={this.props.serviceLink}>
                            <ButtonText buttonText={'View more'} type={'button'} className="text-primary pt-sm-3 pl-0"/>
                        </Link>
                    ) : (
                        null
                    )}

                </div>
                <div className="col-md-6 pr-0 pl-0">
                    <img src={this.props.serviceImage || '/static/images/services/ux-design.jpg'}
                         className={cn(this.props.imageClassName, ' img-fluid mt-md-0 mt-5')}
                    />
                </div>
            </div>
        );
    }
};
export default ServiceItem;

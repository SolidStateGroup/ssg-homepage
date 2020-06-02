import React from 'react';
import cn from 'classnames';
import propTypes from 'prop-types';

const _propTypes = {
    className: propTypes.string,
    children: propTypes.node,
    onClick: propTypes.func,
};

const ClientQuote = global.ClientQuote = class extends React.PureComponent {
    static displayName = 'ClientQuote';

    static propTypes = _propTypes;

    render() {
        const { } = this.props;
        return (
            <div className="panel panel--navy">
                <div className="flex-row pl-4">
                    <div className="flex-1 align-items-center justify-content-center hero__gfx-container hidden-sm-down">
                        <img src={this.props.image || null} alt="Client Quote Image" srcSet={this.props.srcSet || null} className="img-fluid img__short"/>
                    </div>
                    <div className="flex-1 justify-content-start p-5">
                        <div>
                            <blockquote className="light">{this.props.text || 'Solid State Group are the bomb digadi bomb bom boom town. Solid State Group are the bomb digadi bomb bom boom town.  Solid State Group are the bomb digadi bomb bom boom town.  Solid State Group are the bomb digadi bomb bom boom town'}</blockquote>
                            <p className="text-small text-light pt-3">{this.props.clientName || 'Krissy Cela'} / <span className="text-primary">{this.props.clientTitle || 'Founder - Tone and Sculpt'}</span></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default ClientQuote;

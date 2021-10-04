import React from 'react';
import cn from 'classnames';
import propTypes from 'prop-types';

const _propTypes = {
  className: propTypes.string,
  icon: propTypes.string,
  children: propTypes.node,
  onClick: propTypes.func,
  ButtonHexagonActive: propTypes.bool,
};

const ButtonHexagonSidebar = global.ButtonHexagonSidebar = class extends React.PureComponent {
  static displayName = 'ButtonHexagonSidebar';

  static propTypes = _propTypes;

  render() {
    const { props, width, height, icon, fill, stroke, ButtonHexagonActive, ...rest } = this;
    return (
      <React.Fragment>
        <Button
          {...props}
          className={cn(props.className, 'btn--hexagon')}
        >

          {this.props.ButtonHexagonActive ? (
            <div className="d-flex align-items-center justify-content-center rncc__hexagon-button-container">
              <svg width={width || "83px"} height={height || "71px"} viewBox="0 0 83 71">
                <g id="RNCCC" stroke="none" fill="none">
                  <g id="RNCCC---Projected-Costs" transform="translate(-42.000000, -393.000000)" fill="#201C26" stroke="#1AC0C6">
                    <g id="Navigation/RNCC-Sidebar" transform="translate(1.000000, 0.000000)">
                      <g id="Navigation" transform="translate(24.000000, 196.000000)">
                        <g id="Cards/React-Native-conversion-panel-alt-2---active" transform="translate(0.000000, 180.000000)">
                          <g id="Icon" transform="translate(8.357298, 0.521193)">
                            <polygon id="Polygon" transform="translate(49.866769, 51.730762) rotate(30.000000) translate(-49.866769, -51.730762) " points="50.0206108 11.9972233 84.5077856 31.7307621 84.3539442 71.464301 49.712928 91.464301 15.2257533 71.7307621 15.3795947 31.9972233"></polygon>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              <i className={(`rncc__hexagon-icon text-navy-secondary ${this.props.icon}`)}/>
            </div>

          ) : (
            <div className="d-flex align-items-center justify-content-center rncc__hexagon-button-container">
              <svg width={width || "83px"} height={height || "71px"} viewBox="0 0 83 71">
                <g id="RNCCC" stroke="none" fill="none">
                  <g id="RNCCC---Projected-Costs" transform="translate(-42.000000, -393.000000)" fill="#201C26" stroke="transparent">
                    <g id="Navigation/RNCC-Sidebar" transform="translate(1.000000, 0.000000)">
                      <g id="Navigation" transform="translate(24.000000, 196.000000)">
                        <g id="Cards/React-Native-conversion-panel-alt-2---active" transform="translate(0.000000, 180.000000)">
                          <g id="Icon" transform="translate(8.357298, 0.521193)">
                            <polygon id="Polygon" transform="translate(49.866769, 51.730762) rotate(30.000000) translate(-49.866769, -51.730762) " points="50.0206108 11.9972233 84.5077856 31.7307621 84.3539442 71.464301 49.712928 91.464301 15.2257533 71.7307621 15.3795947 31.9972233"></polygon>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              <i className={(`rncc__hexagon-icon text-navy-secondary ${this.props.icon}`)}/>
            </div>
          )}
        </Button>
      </React.Fragment>
    );
  }
};

export default ButtonHexagonSidebar;

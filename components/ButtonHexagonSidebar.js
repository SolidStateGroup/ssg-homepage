import React from 'react';
import cn from 'classnames';
import propTypes from 'prop-types';

const _propTypes = {
  className: propTypes.string,
  icon: propTypes.string,
  children: propTypes.node,
  onClick: propTypes.func,
};

const ButtonHexagonSidebar = global.ButtonHexagonSidebar = class extends React.PureComponent {
  static displayName = 'ButtonHexagonSidebar';

  static propTypes = _propTypes;

  render() {
    const { props, width, height, icon, fill, stroke, ...rest } = this;
    return (
      <React.Fragment>
        <Button
          {...props}
          className={cn(props.className, 'btn--hexagon')}
        >

          {this.props.ButtonHexagonActive ? (
            <div className="d-flex align-items-center justify-content-center">
              <svg width={width || "83px"} height={height || "71px"} viewBox="0 0 83 71">
                <g id="RNCCC" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="RNCCC---Projected-Costs" transform="translate(-42.000000, -393.000000)" fill="#201C26" stroke="#1AC0C6" stroke-width="1.5">
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
            <div className="d-flex align-items-center justify-content-center">
              <svg width={width || "80px"} height={height || "70px"} viewBox="0 0 80 70">
                <g id="RNCCC" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="RNCCC---Projected-Costs" transform="translate(-42.000000, -281.000000)" fill="#201C26">
                <g id="Navigation/RNCC-Sidebar" transform="translate(1.000000, 0.000000)">
                <g id="Navigation" transform="translate(24.000000, 196.000000)">
                <g id="Cards/React-Native-conversion-panel-alt-2---complete" transform="translate(7.083130, 67.952293)">
                <polygon id="Polygon" transform="translate(49.950279, 51.919638) rotate(30.000000) translate(-49.950279, -51.919638) " points="49.9013557 11.9424666 84.4981396 31.973421 84.547063 71.9505919 49.9992026 91.8968084 15.4024188 71.865854 15.3534953 31.8886831"></polygon>
                </g>
                </g>
                </g>
                </g>
                </g>
              </svg>
              <i className={(`rncc__hexagon-icon text-navy-secondary ${this.props.icon}`)}></i>
            </div>
          )}
        </Button>
      </React.Fragment>
    );
  }
};

export default ButtonHexagonSidebar;
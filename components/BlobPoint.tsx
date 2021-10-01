import * as React from 'react';

function SvgComponent(props) {
    return (
        <div className="blob-point">
            <svg
              xmlns="http://www.w3.org/2000/svg" width={114} height={107}
              {...props}
            >
                <path
                  d="M87.974 10.145c12.23 5.431 24.81 13.873 25.94 24.386 1.132 10.485-9.212 23.014-17.913 31.86-8.728 8.818-15.84 13.953-22.924 21.508-7.084 7.554-14.142 17.556-22.223 18.927-8.082 1.398-17.16-5.861-23.732-13.577-6.573-7.743-10.64-15.943-15.678-25.273C6.406 58.647.454 48.162.022 36.44-.382 24.69 4.736 11.678 14.326 5.36 23.89-.931 37.87-.555 50.826.87c12.958 1.425 24.891 3.845 37.148 9.275z"
                  fill="#201C26"
                  fillRule="nonzero"
                />
            </svg>
            <span className="blob-point--text">{props.children}</span>
        </div>

    );
}

export default SvgComponent;

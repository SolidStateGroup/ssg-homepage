import cn from 'classnames';

import React, { FunctionComponent } from 'react';
import propTypes from 'prop-types'; // we need this to make JSX compile
import className from 'classnames';

type ComponentType = {
  className?: string,
  subTitle: string,
  min: number,
  value: number,
  step: number,
  max: number,
  title: string,
  onChange: (v:number)=>void
};

const TheComponent: FunctionComponent<ComponentType> = (props) => {
    const { subTitle, title, min, max, disabled, step, onChange, value } = props;
    return (

        <div className={cn(className, '')}>
            <p className="text-primary text-center mb-0 text-small">{subTitle}</p>
            <h3 className="text-white text-center mb-2">{title}</h3>
            <div className="range">
                <input
                  step={step}
                  value={value}
                  onChange={(e) => {
                      onChange(Utils.safeParseEventValue(e));
                  }}
                  disabled={disabled}
                  readOnly type="range"
                  min={min}
                  max={max}
                />
            </div>
        </div>

    );
};

export default TheComponent;

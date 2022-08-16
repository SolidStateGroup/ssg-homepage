import React from 'react';

import { VisibilityContext } from 'react-horizontal-scrolling-menu';


function Arrow({
    children,
    disabled,
    onClick,
}: {
  children: React.ReactNode;
  disabled: boolean;
  onClick: VoidFunction;
}) {
    return (
        <button
          disabled={disabled}
          onClick={onClick}
          className="btn timeline__button"
          style={{
              opacity: disabled ? '0' : '1',
          }}
        >
            {children}
        </button>
    );
}

export function LeftArrow() {
    const {
        isFirstItemVisible,
        scrollPrev,
        visibleItemsWithoutSeparators,
        initComplete,
    } = React.useContext(VisibilityContext);

    const [disabled, setDisabled] = React.useState(
        !initComplete || (initComplete && isFirstItemVisible),
    );
    React.useEffect(() => {
    // NOTE: detect if whole component visible
        if (visibleItemsWithoutSeparators.length) {
            setDisabled(isFirstItemVisible);
        }
    }, [isFirstItemVisible, visibleItemsWithoutSeparators]);

    return (
        <Arrow disabled={disabled} onClick={() => scrollPrev()}>
            <i className="fas fa-angle-left text-primary"></i>
        </Arrow>
    );
}

export function RightArrow() {
    const {
        isLastItemVisible,
        scrollNext,
        visibleItemsWithoutSeparators,
    } = React.useContext(VisibilityContext);

    const [disabled, setDisabled] = React.useState(
        !visibleItemsWithoutSeparators.length && isLastItemVisible,
    );
    React.useEffect(() => {
        if (visibleItemsWithoutSeparators.length) {
            setDisabled(isLastItemVisible);
        }
    }, [isLastItemVisible, visibleItemsWithoutSeparators]);

    return (
        <Arrow disabled={disabled} onClick={() => scrollNext()}>
      {/*Right arrow here*/}
      {/*    <i className="fas fa-times-hexagon text-red"></i>*/}
          <i className="fas fa-angle-right text-primary"></i>
        </Arrow>
    );
}

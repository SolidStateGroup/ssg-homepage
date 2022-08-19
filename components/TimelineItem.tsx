import React from 'react';

import { VisibilityContext } from 'react-horizontal-scrolling-menu';

export function TimelineItem({
    itemId,
    selected,
    // onClick,
    title,
    year,
    text,
    img,
}: {
  itemId: string;
  selected: boolean;
  // onClick: Function;
  title: string;
  year: string;
  text: string;
  img: string;
}) {
    const visibility = React.useContext(VisibilityContext);

    const visible = visibility.isItemVisible(itemId);

    return (
        <div
          // onClick={() => onClick()}
          // role="button"
          tabIndex={0}
          className="timeline-item"
        >
            <div>

                {img ? <img className="timeline-item__img img-fluid" src={img} alt="SSG"/> : null}
                <h5 className="text-light">{title || null}</h5>
                <span className="text-primary">{year}</span>
                <p className="text-light">{text}</p>
                {/*      <div style={{ backgroundColor: visible ? 'transparent' : 'gray' }}> */}
                {/* visible: {JSON.stringify(visible)} */}
                {/*      </div> */}
                {/*      <div>selected: {JSON.stringify(!!selected)}</div> */}
            </div>
            {/* <div */}
            {/*  style={{ */}
            {/*      backgroundColor: selected ? 'green' : 'bisque', */}
            {/*      height: '200px', */}
            {/*  }} */}
            {/* /> */}
        </div>
    );
}

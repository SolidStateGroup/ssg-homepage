import React, { FunctionComponent } from 'react'; // we need this to make JSX compile

type ComponentType = {
  title:string
  headerRight: React.ReactNode
  children: React.ReactNode
}

const TheComponent: FunctionComponent<ComponentType> = ({ title,headerRight,children }) => {
    return (
        <div className="panel--cost">
            <div className="panel--cost__header">
              <div className="flex-row">
                <div className="col-6">
                  <span className="text-light">
                    {title}
                  </span>
                </div>
                <div className="col-6 d-flex justify-content-end">
                  {headerRight}
                </div>
              </div>
            </div>
          <div className="panel--cost__body">
            {children}
          </div>
        </div>
    );
};

export default TheComponent;

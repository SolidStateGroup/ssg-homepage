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
              <Row space>
                <div className="text-light">
                  {title}
                </div>
                {headerRight}
              </Row>
            </div>
          <div className="panel--cost__body">
            {children}
          </div>
        </div>
    );
};

export default TheComponent;

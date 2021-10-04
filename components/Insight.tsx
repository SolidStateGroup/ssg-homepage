import React, { FunctionComponent } from 'react';
import { Insight } from '../common/useData';
import BlobPoint from './BlobPoint'; // we need this to make JSX compile
import cx from 'classnames'
type ComponentType = {
    insight: Insight
    index:number
}

const TheComponent: FunctionComponent<ComponentType> = ({ insight, index,className }) => {
    return (
        <Row className={cx("insight", className)} space>
            <BlobPoint>{index}</BlobPoint>
            <Flex>
                <p className="text-light">
                    <h4>
                        {insight?.title}
                    </h4>

                    <div>
                        {insight?.text}
                    </div>
                </p>
            </Flex>

        </Row>
    );
};

export default TheComponent;

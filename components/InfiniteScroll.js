import propTypes from 'prop-types';
import React, { PureComponent } from 'react';
import _InfiniteScroll from 'react-infinite-scroll-component'
import chunk from 'lodash/chunk'
import take from 'lodash/take'
export default class TheComponent extends PureComponent {
  static displayName = 'TheComponent';

  static propTypes = {
    pageSize: propTypes.number,
    chunkSize: propTypes.number
  };
  static defaultProps = {
    pageSize: 10,
    chunkSize: 1
  };
  state = {
    chunkedItems: chunk(this.props.items,this.props.chunkSize||1),
    page: 0
  };
  componentWillReceiveProps(nextProps, nextContext) {
    if (nextProps.items !== this.props.items || this.props.chunkSize !== nextProps.chunkSize) {
      this.setState({
        chunkedItems: chunk(nextProps.items,nextProps.chunkSize||1),
        page: 0
      })
    }
  }

  hasMore = ()=> true

  render() {
    const { props: {pageSize, chunkSize} } = this;
    const items = take(this.state.chunkedItems, pageSize*(this.state.page+1))
    return items && (
      <_InfiniteScroll
        dataLength={items.length}
        next={()=>this.setState({page: this.state.page +1})}
        hasMore={this.hasMore()}
      >
        {items.map((item)=> {
          return (
            <div className="row">
              {
                item.map((item)=>{
                  return this.props.renderItem(item);
                })
              }
            </div>
          )
        })}
      </_InfiniteScroll>
    );
  }
}

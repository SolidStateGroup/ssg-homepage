import React, { Component, PropTypes } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import filter from 'lodash/filter';
import BlogTag from '../../components/BlogTag';
import blog from '../../static/blog.json';
// import propTypes from 'prop-types';

class BlogItem extends Component {
  static displayName = 'BlogItem';

  static propTypes = {};

  shouldComponentUpdate(nextProps, nextState, nextContext) {
      return false;
  }

  render() {
      const {
          props: {
              item: {
                  description,
                  title,
                  dateFormatted,
                  author,
                  tags,
                  url,
              },
          },
      } = this;
      return (
          <Link prefetch={false} href={`/blog/${url}`}>
              <div className="blog-item clickable">
                  <div className="blog-item-content">
                      <h2>
                          {title}
                      </h2>
                      <p>
                          {description}
                      </p>
                      <div className="date">
                          {`Published: ${dateFormatted} By ${author}`}
                      </div>
                      <div className="tags mt-2">
                          {tags.map(t => (
                              <BlogTag key={t} tag={t}/>
                          ))}
                      </div>
                  </div>
              </div>
          </Link>
      );
  }
}
const WhatAreFeatureFlagsPage = class extends Component {
  static displayName = 'WhatAreFeatureFlagsPage'

  constructor(props, context) {
      super(props, context);
      this.state = {
          filter: 'javascript',
      };
  }

  componentWillMount() {
      API.trackPage(Constants.pages.BLOG);
  }

  getBlog = () => {
      if (!this.props.router.query.tag) {
          return blog;
      }
      return filter(blog, (item) => {
          return item.tags.includes(this.props.router.query.tag);
      });
  }

  render() {
      const blog = this.getBlog();
      const filter = this.props.router.query.tag;
      return (
          <div className="blog">
              <Head>
                  <title>
                    Bullet Train - Blog
                  </title>
              </Head>
              <div className="container mt-5">
                  {!!filter && (
                  <div className="mb-3 text-center">
                    Filtering by <BlogTag tag={filter}/>
                      {' '}
                      <Link>
                          <a href="/blog">
                          View all
                          </a>
                      </Link>
                  </div>
                  ) }
                  {blog.map(b => (
                      <BlogItem key={b.title} item={b}/>
                  ))}
              </div>
          </div>
      );
  }
};

WhatAreFeatureFlagsPage.propTypes = {};

export default WhatAreFeatureFlagsPage;

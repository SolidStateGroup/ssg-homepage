import React, { Component, PropTypes } from 'react';
import Head from 'next/head';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';
import BlogTag from '../../components/BlogTag';

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
          <Link prefetch={false} href={`/blog/${url}`} to={`/blog/${url}`}>
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
      this.state = {};
  }

  componentWillMount() {
      API.trackPage(Constants.pages.BLOG);
  }

  static async getInitialProps({ req }) {
      const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : '';
      const res = await fetch(`${baseUrl}/api/blog`);
      const blog = await res.json();
      return {
          blog,
      };
  }

  getBlog = () => {
      return this.props.pageProps.blog;
  }

  render() {
      const blog = this.getBlog();
      return (
          <div>
              <Head>
                  <title>
                    Bullet Train - Blog
                  </title>
              </Head>
              <div className="container mt-5">
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

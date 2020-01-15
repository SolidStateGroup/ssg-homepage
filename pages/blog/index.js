import React, { Component } from 'react';
import Link from 'next/link';
import filter from 'lodash/filter';
import propTypes from 'prop-types';
import BlogTag from '../../components/BlogTag';
import blog from '../../static/blog.json';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Page from '../../components/Page';

class BlogItem extends Component {
  static displayName = 'BlogItem';

  static propTypes = {
      item: propTypes.shape({
          description: propTypes.string,
          title: propTypes.string,
          dateFormatted: propTypes.string,
          tags: propTypes.array,
          url: propTypes.string,
      }),
  }

  shouldComponentUpdate() {
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


const BlogPage = class extends Component {
  static displayName = 'BlogPage'

  static propTypes = {
      router: propTypes.object,
  };

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
      const blogItems = this.getBlog();
      const filteredBy = this.props.router.query.tag;
      return (
          <Page title={Constants.titles.blog} canonical="blog">
              <Header/>
              <div className="blog">
                  <div className="container mt-5">
                      {!!filteredBy && (
                      <div className="mb-3 text-center">
                          Filtering by <BlogTag tag={filteredBy}/>
                          {' '}
                          <Link href="/blog">
                              <a href="/blog">
                                View all
                              </a>
                          </Link>
                      </div>
                      )}
                      {blogItems.map(b => (
                          <BlogItem key={b.title} item={b}/>
                      ))}
                  </div>
              </div>
              <Footer/>
          </Page>
      );
  }
};

BlogPage.propTypes = {};

export default BlogPage;

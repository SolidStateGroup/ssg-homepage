import React, { Component } from 'react';
import propTypes from 'prop-types';
import Link from 'next/link';
import BlogTag from './BlogTag';


// {
//   description: propTypes.string,
//   title: propTypes.string,
//   dateFormatted: propTypes.string,
//   tags: propTypes.array,
//   url: propTypes.string,
// }
const _propTypes = {
    item: propTypes.object,
};


const BlogItem = class extends Component {
    static displayName = 'BlogItem';

    static propTypes = _propTypes;

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
                    <div className="flex-row align-items-start align-items-stretch">
                        <div className="col">
                          <img src="/static/images/blog/tech.jpeg" alt={title}/>
                        </div>
                        <div className="col blog-item-content">
                            <h2>{title}</h2>
                            <p>{description}</p>
                            <div className="date">
                              {`${dateFormatted} By ${author}`}
                            </div>
                            <div className="tags mt-2">
                              {tags.map(t => (
                                <BlogTag key={t} tag={t}/>
                              ))}
                            </div>
                            <ButtonText className="text-primary align-self-baseline mt-4" buttonText="Read Post" />
                        </div>
                    </div>
                </div>
            </Link>
        );
    }
};

export default BlogItem;

export const BlogItemSummary = global.BlogItemSummary = class extends Component {
    static displayName = 'BlogItemSummary';

    static propTypes = _propTypes;

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
              <div className="blog-item clickable col-4">
                  <div className="flex-row align-items-start align-items-stretch">
                          <img src="/static/images/blog/tech.jpeg" alt={title}/>
                      <div className="blog-item__content">
                          <h4 className="mt-3">{title}</h4>
                          <div className="date">
                              {`${dateFormatted} By ${author}`}
                          </div>
                          <div className="tags mt-2">
                              {tags.map(t => (
                                <BlogTag key={t} tag={t}/>
                              ))}
                          </div>
                          <ButtonText className="text-primary align-self-baseline mt-4" buttonText="Read Post" />
                      </div>
                  </div>
              </div>
          </Link>
        );
    }
};
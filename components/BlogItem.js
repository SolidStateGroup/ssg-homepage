import React, {Component} from 'react';
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
                    image,
                    tags,
                    url,
                },
            },
        } = this;
        return (
            <Link prefetch={false} href={`/blog/${url}`}>
                <div className="blog-item blog-item--featured py-3 py-sm-0 clickable">
                    <div className="blog-item__tag hidden-sm-up">Latest post</div>
                    <div className="flex-row align-items-start align-items-stretch">
                        <div className="col-12 col-md-5">
                            <div className="blog-item__image" style={{backgroundImage: `url(${image})`}}/>
                        </div>
                        <div className="col-12 col-md-7 blog-item-content">
                            <h2 className="blog-item__h2">{title}</h2>
                            <p className="blog-item__p">{description}</p>
                            <div className="date">
                                {`${dateFormatted} By ${author}`}
                            </div>
                            <div className="tags mt-2">
                                {tags.map(t => (
                                    <BlogTag key={t} tag={t}/>
                                ))}
                            </div>
                            <ButtonText className="blog-item__btn text-primary align-self-baseline pl-0" buttonText="Read Post"/>
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
                    image
                },
            },
        } = this;
        return (
            <Link prefetch={false} href={`/blog/${url}`}>
                <div className="blog-item clickable col-12 col-sm-4">
                    <div className="flex-row align-items-start align-items-stretch">
                        <div className="blog-item__image blog-item__image--small" style={{backgroundImage: `url(${image})`}}/>
                        <div className="blog-item__content">
                            <h4 className="mt-3">{title}</h4>
                            <div className="date">
                                {`${dateFormatted} By ${author}`}
                            </div>
                            <div className="tags mt-2">
                                {tags && tags.map(t => (
                                    <BlogTag key={t} tag={t}/>
                                ))}
                            </div>
                            <ButtonText className="text-primary align-self-baseline pl-0 blog-item__btn" buttonText="Read Post"/>
                        </div>
                    </div>
                </div>
            </Link>
        );
    }
};

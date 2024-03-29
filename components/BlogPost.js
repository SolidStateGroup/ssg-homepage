// import propTypes from 'prop-types';
import React, { Component } from 'react';
import propTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import Footer from './Footer';
import Header from './Header';
import parseMarkdown from '../common/parse-markdown';
import Project from '../common/project';

export default class BlogPost extends Component {
    static displayName = 'BlogPost';

    static propTypes = {
        source: propTypes.string.isRequired,
        route: propTypes.string.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = { loading: true };
    }

    componentDidMount() {
        const {
            title,
        } = parseMarkdown(this.props.source);

        API.trackPage(`Post - ${title}`);
        this.setState({ loading: false });
    }

    renderSEOTags = () => {
        const {
            title,
            image,
            date,
            description,
            author,
        } = parseMarkdown(this.props.source);
        console.log(image)
        return (
            <>
                <Head>
                    <meta charSet="utf-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                    <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
                    {this.props.route && (
                        <link rel="canonical" href={`${Project.canonicalUrl}${this.props.route}`}/>
                    )}
                    <meta data-rh="true" property="og:site_name" content={Project.siteName}/>
                    <meta data-rh="true" property="og:type" content="article"/>
                    <meta data-rh="true" property="og:title" content={title}/>
                    <meta data-rh="true" property="og:description" content={description}/>
                    <meta data-rh="true" name="description" content={description}/>
                    <meta data-rh="true" property="article:author" content={author}/>
                    <meta data-rh="true" name="author" content={author}/>
                    <meta data-rh="true" name="robots" content="index,follow"/>
                    <meta data-rh="true" property="article:published_time" content={date}/>
                    {typeof window !== 'undefined' && Project.isso && (
                        <script
                          src="/static/comments.js"
                          data-isso-require-author="true"
                          data-isso={Project.isso}
                        />
                    )}
                    <title>
                        {title}
                    </title>
                </Head>
                {image && (
                    <NextSeo openGraph={{ images: [{ url: image }] }}/>
                )}
            </>

        );
    }

    render() {
        const {
            title,
            avatar,
            content,
            author,
            dateFormatted,
        } = parseMarkdown(this.props.source);
        return (
            <>
                <Header className="p-4"/>
                <div className="blog pb-5">
                    {this.renderSEOTags()}
                    <div className="hero mx-0 pt-4 pr-4 pb-0 pl-4">
                        <div
                          className="hero__container flex-1 align-self-stretch row flex-row text-center text-md-left"
                        >

                            <div className="col-md-8 offset-md-2 text-center pl-5 pr-5 pt-5">
                                <h1 className="blog__title mb-4">{title}</h1>
                            </div>
                            <div className="col-md-12 d-flex justify-content-center">
                                <div className="blog__author mb-4 mt-3">
                                    <Row>
                                        <img alt={author} className="blog__avatar" src={avatar}/>
                                        <div className="ml-2">
                                            <div className="blog__author">
                                                {author}
                                            </div>
                                            <div className="blog__date">
                                                {dateFormatted}
                                            </div>
                                        </div>
                                    </Row>
                                </div>
                            </div>

                            <div
                              className="flex-1 align-items-center justify-content-center hero__gfx-container hidden-sm-down"
                            />
                        </div>
                    </div>
                    <div className="col-md-6 offset-md-3 mt-5">
                        <div className="blog__content">
                            <ReactMarkdown
                              escapeHtml={false}
                              source={content}
                            />
                        </div>
                    </div>
                </div>
                <div className="section section--grey">
                    <div className="col-md-6 offset-md-3">
                        {!this.state.loading && Project.isso && (
                            <section id="isso-thread"/>
                        )}
                    </div>
                </div>
                <Footer className="homepage"/>
            </>
        );
    }
}

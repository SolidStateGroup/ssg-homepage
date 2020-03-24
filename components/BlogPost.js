// import propTypes from 'prop-types';
import React, { Component } from 'react';
import propTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import Head from 'next/head';
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
          date,
          description,
          author,
      } = parseMarkdown(this.props.source);
      return (
          <Head>
              <meta charSet="utf-8"/>
              <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
              <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
              {this.props.route && (
                  <link rel="canonical" href={`${Project.canonicalUrl}${this.props.route}`} />
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
            <Header/>
            <div className="blog pb-5">
                {this.renderSEOTags()}
                <div className="hero mx-0 pt-4 pr-4 pb-0 pl-4">
                    <div className="hero__container flex-1 align-self-stretch row flex-row text-center text-md-left">
                        <div className="flex-1 justify-content-start p-5">
                            <div className="offset-md-3">
                                <h1 className="blog__title mb-4">{title}</h1>
                            </div>
                        </div>
                        <div
                          className="flex-1 align-items-center justify-content-center hero__gfx-container hidden-sm-down"
                        />
                    </div>
                </div>
                <div className="container">
                    <div className="blog__author mb-3 mt-3">
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
                    <div className="blog__content">
                        <ReactMarkdown
                          escapeHtml={false}
                          source={content}
                        />
                    </div>
                </div>
            </div>
            <div className="container pb-3">
                {!this.state.loading && Project.isso && (
                <section id="isso-thread" />
                )}
            </div>
            <Footer className="homepage"/>
      </>
      );
  }
}

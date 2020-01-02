// import propTypes from 'prop-types';
import React, { Component } from 'react';
import propTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import Head from 'next/head';
import Footer from './Footer';
import parseMarkdown from '../common/parse-markdown';

export default class TheComponent extends Component {
  static displayName = 'BlogPost';

  static propTypes = {
      source: propTypes.string.isRequired,
  };

  constructor(props) {
      super(props);
      this.state = { loading: true };
  }

  componentDidMount() {
      this.setState({ loading: false });
  }

  render() {
      const {
          title,
          date,
          avatar,
          description,
          content,
          author,
          dateFormatted,
      } = parseMarkdown(this.props.source);
      return (
        <>
            <div className="container blog pt-5 pb-5">
                <Head>
                    <meta charSet="utf-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                    <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
                    <meta
                      name="description"
                      content="Manage your Feature Flags, Feature Toggles and Remote Config in your Mobile, React, React Native, Java, Javascript (Node) and Python projects."
                    />
                    <meta data-rh="true" property="og:site_name" content="Bullet Train"/>
                    <meta data-rh="true" property="og:type" content="article"/>
                    <meta data-rh="true" property="og:title" content={title}/>
                    <meta data-rh="true" property="og:description" content={description}/>
                    <meta data-rh="true" name="description" content={description}/>
                    <meta data-rh="true" property="article:author" content={author}/>
                    <meta data-rh="true" name="author" content={author}/>
                    <meta data-rh="true" name="robots" content="index,follow"/>
                    <meta data-rh="true" property="article:published_time" content={date}/>
                    {typeof window !== 'undefined' && (
                    <script
                      src="/static/comments.js"
                      data-isso="https://isso.bullet-train.io/"
                    />
                    )}
                    <title>
                        {title}
                    </title>
                </Head>
                <h1>
                    {title}
                </h1>
                <div className="author mb-5 mt-3">
                    <Row>
                        <img alt={author} className="avatar" src={avatar}/>
                        <div className="ml-2">
                            <div className="author">
                                {author}
                            </div>
                            <div className="date">
                                {dateFormatted}
                            </div>
                        </div>
                    </Row>
                </div>
                <ReactMarkdown
                  escapeHtml={false}
                  source={content}
                />
            </div>
            <div className="container pb-3">
                {!this.state.loading && (
                <section id="isso-thread" />
                )}
            </div>
            <Footer className="homepage"/>
      </>
      );
  }
}

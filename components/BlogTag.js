// import propTypes from 'prop-types';
import React, { Component } from 'react';
import propTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import Head from 'next/head';
import parseMarkdown from '../common/parse-markdown';

export default class TheComponent extends Component {
  static displayName = 'BlogPost';

  static propTypes = {
      tag: propTypes.string.isRequired,
  };

  render() {
      return (
          <span className={`tag ${this.props.tag.replace(/ /g, '_').toLowerCase()}`}>{this.props.tag}</span>
      );
  }
}

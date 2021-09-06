import React, { Component } from 'react';
import propTypes from 'prop-types';
import Head from 'next/head';
import { useRouter } from 'next/router';

const TheComponent = ({ title: _title, description: _description, children, canonical }) => {
    const router = useRouter();
    const route = router.asPath || router.pathname;
    const title = _title || Constants.titles[route];
    const description = _description || Constants.descriptions[route];
    return (
      <>
          <Head>
              {title && (
              <title>
                  {title}
              </title>
              )}
              {description && (
              <meta name="description" content={description}/>
              )}
              <link rel="canonical" href={`${Project.canonicalUrl}/${canonical}`} />
          </Head>
          {children}
      </>
    );
};
TheComponent.propTypes = {
    title: propTypes.string,
    canonical: propTypes.string,
    description: propTypes.string,
    children: propTypes.node.isRequired,
};
export default TheComponent;

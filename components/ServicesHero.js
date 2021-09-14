import React from 'react';
import cn from 'classnames';
import propTypes from 'prop-types';
import Link from 'next/link';
import { ButtonPrimary } from './base/forms/Button';

const _propTypes = {
  className: propTypes.string,
  title: propTypes.string,
  text: propTypes.string
};

const ServicesHero = global.ServicesHero = class extends React.PureComponent {
  static displayName = 'ServicesHero';

  static propTypes = _propTypes;

  render() {
    return (
      <React.Fragment>
        <div className="hero__container flex-1 align-self-stretch row flex-row text-center">
          <div className="flex-1 p-5">
            <div className="container">
              <h5 className="title--light mb-0">Our Services</h5>
              <h1 className="hero__title mb-4">{this.props.title}</h1>
              <div className="col-lg-6 offset-lg-3">
                <p className="text-light">{this.props.text}</p>
                <Link prefetch={false} href="/contact-form">
                  <ButtonPrimary>Send us a brief</ButtonPrimary>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
};
export default ServicesHero;

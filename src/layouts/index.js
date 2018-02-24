import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import {StyleRoot} from 'radium';

import 'animate.css/animate.css';
import 'bootstrap/dist/css/bootstrap.css';

import './index.css';
import './custom.css';

const TemplateWrapper = ({ children }) =>
  <StyleRoot>
    <div>
      <Helmet
        title="Fulk Tech Developers - Drive Business towards success"
        meta={[
          { name: 'description', content: 'We develop user interactive website for local or international businesses and personal portfolio.' },
          { name: 'keywords', content: 'freelance, design, web development, seo, education, marketig, web, portfolio, logo, app development, markting,business development, organizations' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1, minimum-scale=1' },
          { name: 'google-site-verification', content: '' },
          { property: 'og:image', content: 'www.myfulk.com' }
        ]}
      />
      <div>
        {children()}
      </div>
    </div>
  </StyleRoot>

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper;
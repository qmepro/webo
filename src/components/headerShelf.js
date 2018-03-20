import React from 'react';
import Link from 'gatsby-link';
import Radium from 'radium';

import bg from '../assets/bg1.jpg';
import logo from '../assets/logo.png';
import scroll from '../assets/scroll1.gif'
import PageHeader from '../components/page/pageHeader'

const HeaderShelf = () =>
  <section id="header-section" style={styles.sectionLong}>
    <section id="header-pin" className="cover" style={styles.section}>
    
      <div style={{ display: "table", width: "100%", height: "100%" }}>
        <div style={{ display: "table-cell", verticalAlign: "middle" }}>
          <div id="logo-strapline">
            <img id="logo" src={logo} style={styles.logo} />
            <hr style={styles.hr} />
            <h1 id="strapline" style={styles.h1}>MyFulk<br /> Drive Business Towards Success</h1>
            <img id="scroll" src={scroll} style={styles.scroll} />
          </div>
        </div>
      </div>
    </section>
  </section>

var styles = {};

styles.section = {
  height: '100vh',
  backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)),url(' + bg + ')',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center',
  'WebkitBackgroundSize': 'cover',
  'MozBackgroundSize': 'cover',
  'OBackgroundSize': 'cover',
  'BackgroundSize': 'cover',
  width: "100%"
}

styles.sectionLong = {
  height: '120vh'
}

styles.h1 = {
  color: 'white',
  textAlign: 'center',
  fontFamily: 'Apercu-Regular',
  fontSize: '4.5vh',
  letterSpacing: '0.05em',
  lineHeight: '1.3em',
  "@media only screen and (max-width : 480px)": {
    letterSpacing: 0
  }
}

styles.logo = {
  display: 'block',
  width: '24vh',
  height: 'auto',
  margin: 'auto'
}

styles.hr = {
  width: styles.logo.width,
  margin: 'auto',
  color: 'white',
  backgroundColor: 'white',
  marginTop: '4vh',
  marginBottom: '4vh'
}

styles.scroll = {
  display: 'block',
  width: '10vh',
  height: 'auto',
  margin: 'auto'
}
export default Radium(HeaderShelf);

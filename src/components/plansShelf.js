import React from 'react';
import Link from 'gatsby-link';

import sharedStyles from '../shared/sharedStyles';
import colours from '../shared/colours';
import SectionHeading from "./sectionHeading";

import MyIcon from './myicon';

import Personal from '../assets/contact-icons/personal1.png';
import Business from '../assets/contact-icons/business.png';
import Custom from '../assets/contact-icons/custom.png';

import DottedCircle from './decorations/dottedCircle';
import Circle from './decorations/circle';
import Triangle from './decorations/triangle';
import ContactUs from '../assets/contactus.png'

const PlansShelf = () => 
  <section className="diagonal anticlockwise" style={styles.section}>
    <SectionHeading style={{color: "white"}} title="Service Plans" smallText="" />
    <div className="container">
      <div className="row text-center">
        <div style={styles.col} className="col-xs-6 col-sm-4"><MyIcon iconURL={Personal} circleColour="#7FB9FF" textColor="white" description="Personal Website" />
            <ul style={styles.ul}>
                <li>Single Page</li>
                <li>1 Year Validity</li>
                <li>Multiple Themes</li>
                <li>Single Revisions</li>
                <li><h3>At Rs. 500 Only</h3></li>
                <li><a href="/form"><img src={ContactUs} /></a></li>
            </ul>
        </div>
        <div style={styles.col} className="col-xs-6 col-sm-4"><MyIcon style={styles.ico} iconURL={Business} circleColour="#7FB9FF" textColor="white" description="Business Website" />
            <ul style={styles.ul}>
                <li>Multiple Page</li>
                <li>1 Year Validity</li>
                <li>Multiple Themes</li>
                <li>SSL Certificate</li>
                <li>Web Forms</li>
                <li>Multiple Revisions</li>
                <li><h3>At Rs. 2000 Only</h3></li>
                <li><a href="/form"><img src={ContactUs} /></a></li>
            </ul>
        </div>
        <div className="clearfix visible-xs-block"></div>
        <div style={styles.col} className="col-xs-6 col-sm-4 col-centered"><MyIcon iconURL={Custom} circleColour="#7FB9FF" textColor="white" description="Custom Web Application" />
            <ul style={styles.ul}>
                <li>E-Commerce Website</li>
                <li>Organitational Web Application</li>
                <li>E-Mail Server</li>
                <li>Linux Web Hosting</li>
                <li>Marketing Web Tools</li>
                <li>Business Class Support</li>
                <li><h3>Custom Price</h3></li>
                <li><a href="/form"><img src={ContactUs} /></a></li>
            </ul>
        </div>
        <div className="clearfix visible-sm-block visible-md-block"></div>
      </div>
    </div>

    <DottedCircle style={{width: "30vh", height: "30vh", position: "absolute", top: "-15vh", left: "-15vh"}} /> 
    <Triangle style={{position: "absolute", bottom: "20vh", right: "-8vh", zIndex: -1}} width="18" height="22" colour="#fdc523" rotate="-45" />


  </section>

var styles = {};

styles.section = {
  background: "Purple",
  paddingBottom: "10%",
  position: "relative"
}

styles.col = {
  paddingLeft: 0,
  paddingRight: 0
}

styles.ul = {
    listStyle: "none",
    fontFamily: "Apercu-Regular",
    fontSize: "20px",
    color: "#b2b1b8",
    lineHeight: "1.7"
}

styles.ico = {
    width: "100%"
}

export default PlansShelf;
import React from 'react';
import Link from 'gatsby-link';
import Radium from 'radium';

import sharedStyles from '../shared/sharedStyles';

import ProjectScreenshot from './projectScreenshot';

import SectionHeading from "./sectionHeading";

import reebok1 from '../assets/reebok-header-bg.jpg';

import ecommerce from '../assets/ecommerce.png';
import educational_institutions from '../assets/educational_institutions.png';
import local_business from '../assets/local_business.png';
import marketing from '../assets/Marketing.png';
import portfolio from '../assets/portfolio.png';
import organization from '../assets/ORGANIZATION.png';

import DottedCircle from './decorations/dottedCircle';
import Circle from './decorations/circle';
import Triangle from './decorations/triangle';

class ThemeShelf extends React.Component {

  componentDidMount(){

    if(typeof window !== "undefined"){

      const ScrollMagic = require('ScrollMagic');
      typeof window !== 'undefined' && require('animation.gsap');
      // require('debug.addIndicators');
      const TimelineMax = require('TimelineMax');

      const controller = new ScrollMagic.Controller();

      const tween = new TimelineMax();

      tween.add([
        TweenMax.to("#featured-image", 1, {x: 100, ease: Linear.easeNone}),
        TweenMax.to("#featured-image", 1, {opacity: 1, ease: Linear.easeNone})
        ]);

      var scene = new ScrollMagic.Scene({triggerHook: 0.5, triggerElement: "#work-section", duration: 200})
              .setTween(tween)
              // .setPin("#header-pin", {pushFollowers: true})
              // .addIndicators()
              .addTo(controller);

      const tween2 = new TimelineMax();

      tween2.add([
        TweenMax.to("#featured-info", 1, {y: 100, ease: Linear.easeNone}),
        TweenMax.to("#featured-info", 1, {opacity: 1, ease: Linear.easeNone})
        ]);

      var scene = new ScrollMagic.Scene({triggerHook: 0.4, triggerElement: "#work-section", duration: 200})
              .setTween(tween2)
              // .setPin("#header-pin", {pushFollowers: true})
              // .addIndicators()
              .addTo(controller);

      const tweenWorkProjects = new TimelineMax();

      tweenWorkProjects.add([
        TweenMax.to("#featured-info", 1, {y: 100, ease: Linear.easeNone}),
        TweenMax.to("#featured-info", 1, {opacity: 1, ease: Linear.easeNone})
        ]);

      var scene = new ScrollMagic.Scene({triggerHook: 0.4, triggerElement: "#work-section", duration: 200})
              .setTween(tweenWorkProjects)
              // .setPin("#header-pin", {pushFollowers: true})
              // .addIndicators()
              .addTo(controller);
    }
            

  }

  render(){

    return (<section id="work-section" className="diagonal clockwise" style={styles.section}>
      <SectionHeading title="About Us" smallText="" />

      <div className="container-fluid" style={styles.container}>
        <div className="row no-gutters">
          <div className="col-sm-6">
            <div id="featured-image" style={styles.shadowImage}>
              <span style={styles.imageBefore}></span>
              <Link to="#"><img src={reebok1} style={styles.featuredImage} /></Link>
            </div>
          </div>
          <div id="featured-info" className="col-sm-6" style={styles.rightHalf}>
            <Link to="#" className="specialHeading" style={{fontSize: "18px"}}></Link>
            <p style={styles.p}>Our expertise is to provide <strong>Web Services</strong> for <strong>Business Development</strong> right from <strong>Web Designing</strong> to <strong>Web Marketing</strong>. Located in <strong>Pune</strong>, Our <strong>Web Tools</strong> help you to develop your business in various areas.</p>
          </div>
        </div>
      </div>
      <SectionHeading title="Work Areas" smallText="Our" />
      <div className="container-fluid" style={styles.projectsContainer}>
        <div className="row">
          <div id="project1" style={styles.screenshot} className="col-xs-12 col-sm-4"><em><iframe to="https://reactjs.org/" width="600" height="400"></iframe></em></div>
          <div id="project2" style={styles.screenshot} className="col-xs-12 col-sm-4"><em><Link to="#"><ProjectScreenshot screenshotURL={portfolio} description="Portfolio" /></Link></em></div>
          <div className="clearfix visible-xs-block"></div>
          <div id="project3" style={styles.screenshot} className="col-xs-12 col-sm-4"><em><Link to="#"><ProjectScreenshot screenshotURL={educational_institutions} description="Educational Institutions" /></Link></em></div>
          <div className="clearfix visible-sm-block visible-md-block"></div>
          <div id="project4" style={styles.screenshot} className="col-xs-12 col-sm-4"><em><Link to="#"><ProjectScreenshot screenshotURL={local_business} description="Local Business" /></Link></em></div>
          <div className="clearfix visible-xs-block"></div>
          <div id="project5" style={styles.screenshot} className="col-xs-12 col-sm-4"><em><Link to="#"><ProjectScreenshot screenshotURL={marketing} description="Marketing" /></Link></em></div>
          <div id="project6" style={styles.screenshot} className="col-xs-12 col-sm-4"><em><Link to="#"><ProjectScreenshot screenshotURL={organization} description="Organization" /></Link></em></div>
        </div>
        <Circle style={{position: "absolute", top: "-35vh", right: "-5vh"}} diameter="20" colour="#3a86ff" />
        <Triangle style={{position: "absolute", top: "20vh", left: "-4vh", zIndex: -1}} width="12" height="15" colour="#fdc523" rotate="45" />
      </div>

    </section>);
  }

}

var styles = {};

styles.section = {
  background: "white",
  position: "relative"
}

styles.container = {
  marginTop: "3%",
  padding: 0,
  marginBottom: "7%"
}

styles.featuredImage = {
  width: "100%",
  position: "relative",
  zIndex: 1
}

styles.shadowImage = {
  position: "relative",
  left: "-100px",
  opacity: 0
}

styles.imageBefore = {
  position: "absolute",
  width: "102%",
  height: "92%",
  top: "-6%",
  left: 0,
  background: "#a8e4bc",
  zIndex: -1
}

styles.rightHalf = {
  padding: "3% 6%",
  position: "relative",
  top: "-100px",
  opacity: 0
}

styles.projectsLink = {
  textAlign: "center",
  marginTop: "3%",
  fontSize: "3vh"
}

styles.p = {
  fontFamily: "Apercu-Regular",
  fontSize: "20px",
  color: "#b2b1b8",
  lineHeight: "1.7"
}

styles.projectsContainer = {
  position: "relative",
  paddingBottom: "8%"
}

styles.screenshot = {
  paddingLeft: "10px",
  paddingRight: "10px"
}

export default Radium(ThemeShelf);


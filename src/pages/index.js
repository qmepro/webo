import React from 'react';
import Link from 'gatsby-link';
import Radium from 'radium';
import Color from 'color';
//import { Grid, Segment, Sticky, Rail } from 'semantic-ui-react';

import Reveal from 'react-reveal';

// import * as ScrollMagic from 'ScrollMagic';
// import gsap from "gsap";
// import {TweenMax} from "gsap";
// require('scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap');

import HeaderShelf from '../components/headerShelf';
import ServicesShelf from '../components/servicesShelf';
import WorkShelf from '../components/workShelf';
import ContactShelf from '../components/contactShelf';
import FooterShelf from '../components/footerShelf';
import PlansShelf from '../components/plansShelf';
import AppsBar from '../components/page/pageHeadM'
import { Z_FIXED } from 'zlib';

function createScene1(){

  if(typeof window !== "undefined"){

    const ScrollMagic = require('ScrollMagic');
    require('animation.gsap');
    // require('debug.addIndicators');
    const TimelineMax = require('TimelineMax');

    const controller = new ScrollMagic.Controller();

    // var tween = TweenMax.to("#logo", 1, {rotation: 360, ease: Linear.easeNone});

    var tween = new TimelineMax();
    tween.add([
      TweenMax.to("#logo-strapline", 1, {y: -100, ease: Linear.easeNone}),
      TweenMax.to("#logo-strapline", 1, {opacity: 0, ease: Linear.easeNone})
      ]);

    // build scene
    var scene = new ScrollMagic.Scene({triggerHook: 0, triggerElement: "#header-section", duration: document.documentElement.clientHeight / 2})
            .setTween(tween)
            .setPin("#header-pin", {pushFollowers: false})
            // .addIndicators()
            .addTo(controller);

    window.onresize = function(event){
      scene.destroy(true);
      createScene1();
    }

  }

}

class IndexPage extends React.Component{

  componentDidMount(){
    createScene1();
  }

  render() {
    

    return (<div id="pin-container">
                  <AppsBar />   
                  <HeaderShelf value="a" />
                  <WorkShelf id="workArea" />
                  <ServicesShelf id="services" />
                  <PlansShelf />
                  <ContactShelf id="contactUs" />
                  <FooterShelf circle="true" />             
    </div>)
  }
}

var styles = {};

export default IndexPage

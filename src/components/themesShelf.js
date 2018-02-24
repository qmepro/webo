import React from 'react';
import Link from 'gatsby-link';

import CircleIcon from './circleIcon';

import sharedStyles from '../shared/sharedStyles';
import colours from '../shared/colours';

import SectionHeading from "./sectionHeading";

import app from '../assets/services-icons/app-icon.png';
import dev from '../assets/services-icons/dev-icon.png';
import logo from '../assets/services-icons/logo-icon.png';
import presentation from '../assets/services-icons/presentation-icon.png';
import print from '../assets/services-icons/print-icon.png';
import web from '../assets/services-icons/web-icon.png';

import DottedCircle from './decorations/dottedCircle';
import Circle from './decorations/circle';
import Triangle from './decorations/triangle';

const circleColour = "#f5f6f7";

const ThemesShelf = () => 
  <section className="diagonal anticlockwise" style={styles.section}>
    <SectionHeading title="Available Themes" smallText="" />
    <div className="container">
      <div className="row">
        <div style={styles.col} className="col-xs-6 col-sm-4"><CircleIcon iconURL={web} description="Blog" />
        <table><tbody><tr><td>
            <ul>
                <li><a href="http://jamiehenson.com/">Jamie Blog</a></li>
                <li><a href="https://hunterchang.com/">HUNTER</a></li>
                <li><a href="https://manu.ninja/">Manu Blog</a></li>
                <li><a href="https://unrealcpp.com/">Unreal C++</a></li>
                <li><a href="https://blog.dustinschau.com/">Dustin Blog</a></li>
                <li><a href="https://vagr9k.me/">Ruben Blog</a></li>
                <li><a href="https://kostasbariotis.com/">Kostas Blog</a></li>
                <li><a href="https://magicly.me/">Magicly Blog</a></li>
                <li><a href="https://calpa.me/">Calpa Blog</a></li>
                <li><a href="https://songwang.io/">Song Blog</a></li>
                <li><a href="https://blog.georgi-yanev.com/">Georgi Blog</a></li>
            </ul>
            </td></tr></tbody></table>
        </div>
        <div style={styles.col} className="col-xs-6 col-sm-4"><CircleIcon iconURL={print} description="Online Book" />
        <table><tbody><tr><td>
          <ul>
            <li><a href="https://guide.freecodecamp.org/">freeCodeCamp</a></li>
            <li><a href="https://www.bricolage.io/">Bricolage</a></li>
            <li><a href="http://damir.io/">Damir</a></li>
            <li><a href="http://digitalpsychology.io/">Digital Psychology</a></li>
            <li><a href="https://www.howtographql.com/">GraphQL</a></li>
          </ul>
          </td></tr></tbody></table>
        </div>
        <div style={styles.col} className="clearfix visible-xs-block"></div>
        <div style={styles.col} className="col-xs-6 col-sm-4"><CircleIcon iconURL={logo} description="Personal and Business" />
          <table><tbody><tr><td>
          <ul className="list-group row">
          <li><a href="https://open.fda.gov/">Open FDA</a></li>
          <li><a href="https://reasonml.github.io/">Reason</a></li>
          <li><a href="https://hackclub.com/">Hack Club</a></li>
          <li><a href="https://oliverbenns.com/">Oliver Benns</a></li>
          <li><a href="https://angeloocana.com/en/">Angelo Ocana</a></li>
          <li><a href="https://www.gold.ac.uk/computing/">Goldsmiths</a></li>
          <li><a href="http://dlbn.co/en/">dlbn</a></li>
          <li><a href="https://www.gabrieladorf.com/">Gabriel Adorf</a></li>
          <li><a href="https://mozilladevelopers.github.io/playground/">PLAYGROUND</a></li>
          <li><a href="http://dfjames.com/">David James</a></li>
          <li><a href="https://etcetera.design/">Etcetera</a></li>
          <li><a href="https://www.swyx.io/">swyx</a></li>
          <li><a href="https://mannequin.io/">MANNEQUIN</a></li>
          </ul>
          </td></tr></tbody>
          <tbody><tr><td>
          <ul>
          <li><a href="https://api-platform.com/">API</a></li>
          <li><a href="https://bottender.js.org/">BOTTENDER</a></li>
          <li><a href="https://www.greglobinski.com/">Greg</a></li>
          <li><a href="https://vibertthio.com/portfolio/">Vibert</a></li>
          <li><a href="https://heml.io/">heml</a></li>
          <li><a href="https://planninglabs.nyc/">Planning Labs</a></li>
          <li><a href="https://santacc.es/">Santa</a></li>
          <li><a href="https://fabianschultz.com/">Fabian</a></li>
          <li><a href="https://www.knw.io/">Knw</a></li>
          <li><a href="https://k-create.com/">K</a></li>
          <li><a href="https://chocolate-free.com/">Chocolate</a></li>
          <li><a href="https://www.verious.io/">Verious</a></li>
          <li><a href="https://severallevels.io/">several levels</a></li>
          </ul>
          </td></tr>
          </tbody>
          </table>
        </div>
      </div>
    </div>

    <DottedCircle style={{width: "20vh", height: "20vh", position: "absolute", top: "-10vh", right: "10vh"}} />
    <Circle style={{position: "absolute", top: "3vh", right: "5vh"}} diameter="10" colour="#fdc523" />
    <Triangle style={{position: "absolute", top: "20vh", left: "0vh", zIndex: -1}} width="15" height="18" colour="#3a86ff" rotate="45" />
    <Circle style={{position: "absolute", top: "45vh", left: "-4vh"}} diameter="9" colour="#fdc523" />


  </section>

var styles = {};

styles.section = {
  background: colours.backgroundGrey,
  position: "relative"
}

styles.col = {
  paddingLeft: 0,
  paddingRight: 0
}

export default ThemesShelf
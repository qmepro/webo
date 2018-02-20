import React from 'react';
import Link from 'gatsby-link';
import Helmet from "react-helmet";
import colours from '../shared/colours';


import ProjectPage from '../components/projects/projectPage';
import FooterShelf from '../components/footerShelf';
import PageHeader from '../components/page/pageHeader'
import ProjectDescription from '../components/projects/projectDescription'
import ThemesShelf from '../components/themesShelf'

import bg from '../assets/projects/mercury/bg.jpg';

import mercury1 from '../assets/projects/mercury/personal_web.png';
import mercury2 from '../assets/projects/mercury/Value_pack.png';
import mercury3 from '../assets/projects/mercury/custom_pack.png';

import DottedCircle from '../components/decorations/dottedCircle';
import Circle from '../components/decorations/circle';
import Triangle from '../components/decorations/triangle';


function encode(data) {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }
  
  export default class Contact extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
  
    handleChange = (e) => {
      this.setState({[e.target.name]: e.target.value});
    }
  
    handleSubmit = e => {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...this.state })
      })
        .then(() => alert("Success!"))
        .catch(error => alert(error));
  
      e.preventDefault();
    };


  render(){
    return (<div>
      <a href="/">
        <ProjectDescription heading="<< Back to Home" description="" />
      </a>
        <ThemesShelf />

        <form
          style={styles.section}
          name="contact"
          method="post"
          action="/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          <p hidden>
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </p>
          <div style={styles.form}>
            <label>
              Your name:<br />
            <input type="text" name="name" onChange={this.handleChange}/>
            </label>
          </div>
          <div style={styles.form}>
            <label>
              Your email:<br />
              <input type="email" name="email" onChange={this.handleChange}/>
            </label>
          </div>
          <div style={styles.form}>
            <label>
              Your Mobile No:<br />
              <input type="tel" name="tel" onChange={this.handleChange}/>
            </label>
          </div>
          <div style={styles.form}>
            <label>
              Message:<br />
              <textarea name="message" onChange={this.handleChange}/>
            </label>
          </div>
          <div style={styles.form}>
            <button type="submit">Send</button>
          </div>
        </form>
        
        <DottedCircle style={{width: "20vh", height: "20vh", position: "absolute", top: "-10vh", right: "10vh"}} />
        <Circle style={{position: "absolute", top: "3vh", right: "5vh"}} diameter="10" colour="#fdc523" />
        <Triangle style={{position: "absolute", top: "20vh", left: "0vh", zIndex: -1}} width="15" height="18" colour="#3a86ff" rotate="45" />
        <Circle style={{position: "absolute", top: "45vh", left: "-4vh"}} diameter="9" colour="#fdc523" />
        
        <FooterShelf />
        
    </div>)
  }

}

var styles = {};

styles.section = {
  background: colours.blue,
  paddingTop: "2%",
  paddingBottom: "5%",
  position: "relative"
}

styles.form = {
  color: '#fffff',
  fontFamily: 'Apercu-Light',
  fontSize: '18px',
  width: '80%',
  maxWidth: '500px',
  margin: '0 auto',
  textAlign: 'center',
  letterSpacing: '0.06em',
  lineHeight: '1.7em'
}



// export default Mercury;
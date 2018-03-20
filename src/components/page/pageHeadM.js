import React from 'react';
import Link from 'gatsby-link';
import Radium from 'radium';
import ReactDOM from 'react-dom';
import { navigateTo } from 'gatsby-link';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import {Tabs, Tab} from 'material-ui/Tabs'

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import ActionHome from 'material-ui/svg-icons/action/home';
import {red500, yellow500, blue500, cyan50} from 'material-ui/styles/colors';
import { freemem } from 'os';

function handleClick() {
    () => navigateTo('/')
}

const styles = {
  title: {
    cursor: 'pointer',
  },
};

constructor(props) {
  super(props);
  this.state = {
    value: 'a',
  };
}

handleChange = (value) => {
  this.setState({
    value: value,
  });
};

/**
 * This example uses an [IconButton](/#/components/icon-button) on the left, has a clickable `title`
 * through the `onClick` property, and a [FlatButton](/#/components/flat-button) on the right.
 */
const AppsBar = () => (
    <MuiThemeProvider>
  <AppBar
    style={styles.head1}
    title={<span style={styles.title}>MyFulk</span>}
    onTitleClick={handleClick}
    iconElementLeft={<IconButton><ActionHome /></IconButton>}
    iconElementRight={
      <Tabs
        value={this.state.value}
        onChange={this.handleChange}
      >
        <Link to="#workArea">
          <Tab label='Work Area' />
        </Link>
        <Link to="#services">
          <Tab label='Services' />
        </Link>
        <Link to="#contactUs">
          <Tab label='Contact Us' />
        </Link>
      </Tabs>
    }
    iconStyleRight={styles.tab}
  />
  </MuiThemeProvider>
);


styles.head1 = {
    
    position: "fixed",
    zIndex: 9,
    minWidth: "100%",
 }

 styles.tabs ={
  
 }

 styles.tab = {
  marginRight: "0px",
  marginLeft: "Inherit",
  minWidth: "50%"
 }

export default AppsBar;
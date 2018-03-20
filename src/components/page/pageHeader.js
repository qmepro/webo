import React from 'react';
import Link from 'gatsby-link';
import Radium from 'radium';
//import { Rail, Sticky, Segment, Menu } from 'semantic-ui-react'
import ReactDOM from 'react-dom';
import { Menu, Collapse, Tabs } from 'element-react';

import 'element-theme-default';

import logo from '../../assets/logo.png';
import { isAbsolute } from 'path';

class PageHeader extends React.Component{

 
  render() {
    

    return (
      <Tabs activeName="1">
        <Tabs.Pane label="User" name="1">User</Tabs.Pane>
        <Tabs.Pane label="Config" name="2">Config</Tabs.Pane>
        <Tabs.Pane label="Role" name="3">Role</Tabs.Pane>
        <Tabs.Pane label="Task" name="4">Task</Tabs.Pane>
      </Tabs>
    )
  }

}

var styles = {};

styles.heado = {
  position: "fixed",
  zIndex: 9,
  minWidth: "100%",
  
 
}

styles.headdItem = {
  float: "right",
}

export default PageHeader;
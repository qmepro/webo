import React from 'react';
import Link from 'gatsby-link';
import Radium from 'radium';


class ExtUrl extends React.Component{
    render(){
        return(
            <img id="p2i_demo" src="http://api.page2images.com/directlink?p2i_url=http://www.freecodecamp.org/&p2i_device=6&p2i_screen=1024x768&p2i_size=300x300&p2i_imageformat=jpg&p2i_key=33712f0a0a7f6364" />
        )
    }
}

export default ExtUrl;

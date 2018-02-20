import React from 'react';
import Link from 'gatsby-link';

import ProjectPage from '../components/projects/projectPage';

import bg from '../assets/projects/mercury/bg.jpg';

import mercury1 from '../assets/projects/mercury/personal_web.png';
import mercury2 from '../assets/projects/mercury/Value_pack.png';
import mercury3 from '../assets/projects/mercury/custom_pack.png';

class Mercury extends React.Component{

  render(){
    return (<div>
      <ProjectPage
        bg={bg}
        heading="Packages"
        description="All packges are require custom domain name which is not include in package."
        images={[mercury1, mercury2, mercury3]}
        prevPageName='/festival-of-you'
        nextPageName='#' />
    </div>)
  }

}



export default Mercury;
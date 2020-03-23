import React from 'react';
import './footer.styles.scss';

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';


const Footer =()=>{

    const social={
        github:'https://github.com/gur22-09',
        linkedIn:'https://www.linkedin.com/in/gurprit-singh-074278167/',
        instagram:'https://www.instagram.com/_vexed_4/'
    } 

    return (
        <footer className='footer'>
          <div className='copyright'>
              © Allrights reserved by Gurprit(quidvil) {new Date().getFullYear()}
          </div>
          <span className='icon-holder'>
                <a href={social.github} target='_blank'><GitHubIcon className='links'/></a>
                <a href={social.linkedIn} target='_blank'><LinkedInIcon className='links'/></a>
                <a href={social.instagram} target='_blank'><InstagramIcon className='links'/></a>
          </span>
        </footer>
    )
}

export default Footer;
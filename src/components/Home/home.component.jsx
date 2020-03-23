import React from 'react';
import './home.styles.scss';

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

import Header from '../header/header.component';

class Home extends React.Component{
    constructor(props){
        super(props);

        this.state={
            socail:{
                facebook:'https://www.facebook.com/Preety-Praveen-101482391373688/?modal=admin_todo_tour',
                
                instagram:'https://www.instagram.com/preety_praveen/',
                
                twitter:'https://twitter.com/preetypraveen'
                    
                
            },
            title:'To have beautiful memories, live a beautiful today'
        }
    }



    render(){
        const {title,socail} = this.state;
        return(
            <div className='home'>
             <Header />
              
             <h1 className='title'>
                
               {title}
              <span className='icon-holder'>
                <a href={socail.facebook} target='_blank'><FacebookIcon className='links' fontSize='large'/></a>
                <a href={socail.instagram} target='_blank'> <InstagramIcon className='links' fontSize='large'/></a>
                <a href={socail.twitter} target='_blank'><TwitterIcon className='links' fontSize='large'/></a>
              </span>
             </h1>
             
    
            </div>
        )
    }
}

export default Home;
import React from 'react';
import './about-me.styles.scss';

import Header from '../../components/header/header.component';
import Footer from '../footer/footer.component';


class AboutMe extends React.Component{
    constructor(){
        super();

        this.state={
            h1:'I strongly believe that to be happy, we’ve to make our surroundings happy.',

            blockquote:'I’m a psychologist by profession and had a passion for writing since childhood. I’ve written poems and stories and even tried my hand at writing and directing a couple of theatre plays and short movies.',

            divText:`The royal taste in my nature comes from the aristocratic land of Patiala. I feel blessed to find my soulmate in the God’s own country, Kerala. Mother of two, I’ve beautifully devoted and dedicated my time to give them the best.

            After living in Middle East for almost two decades, in 2019 I shifted back home and now I’m fully settled in Bangalore. I’ve a vision of starting a clinic where I would use my knowledge of psychology and blend it in an artistic way to help and treat the needy.
            
            I’ve written and directed couple of theatre plays. Some of my best works are; Onam in Oman, Scream of a silence and Ashiyana Mera.`
        }
    }




    render(){
        
        const {h1,blockquote,divText} = this.state;
            
        return(
            <div>
              <div class='about-me'>
                <Header />

                <div>
                    <h1 className='title'>Pretty parveen</h1>
                    <div className='small-text'>
                    Psychologist | Author | Poet | Theatre Artist & Director
                    </div>
                </div>
              </div>

                <div className='about-me-text'>
                 <div className='about-me-image' />
                   
                 

                 <div className='about-me-stuff'>
                     <h1>{h1}</h1>
                     <div className='line-header' />
                     <blockquote>{blockquote}</blockquote>
                     <div>{divText}</div>
                 </div>
                </div>
              <Footer />
            </div>

            
        )
    }
}

export default AboutMe;
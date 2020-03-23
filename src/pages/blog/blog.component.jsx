import React from 'react';
import './blog.styles.scss';


import Header from '../../components/header/header.component';
import Footer from '../footer/footer.component';

import Button from '@material-ui/core/Button';

const Blog =()=>{
    return (
        <div>
           <div className='blog'>
             <Header />
            </div>
           <div className='blog-container'>
             <div className='blog-image' />
             <div className='blog-post'>
                <div className='date'>FEB 01, 2020<span className='author'>AUTHOR: ADMIN</span></div>
                 
                <h1 className='title'>Beautiful today...</h1> 
                <span className='blog-text'>live life and love life !!!!!!</span>

                <Button className='btn' variant="contained">Read More</Button>
             </div>
           </div> 
          <Footer />
        </div>
        
    )
}


export default Blog;
















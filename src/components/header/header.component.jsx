import React from 'react';
import './header.styles.scss';

import {Link} from 'react-router-dom';


const Header=()=>(
    <div className='header'>
        <Link to='/' className='logo-container'>
           
        </Link>
        <div className='options'>
         <Link to='/aboutme' className='option'>
             ABOUT ME
         </Link>
         <Link to='/books' className='option'>
             BOOKS
         </Link>
         
         <Link to='/gallery' className='option'>
             GALLERY
         </Link>

         <Link to='/blog'className='option'>
             BLOG
         </Link>

         <Link to='/contact' className='option'>
             CONTACT 
         </Link>
         
         </div>
    </div>
)


export default Header;
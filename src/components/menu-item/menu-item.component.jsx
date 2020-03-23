import React from 'react';
import './menu-item.styles.scss';


const MenuItem = ({title,imageUrl,size,history,match,linkUrl})=>{
        return (
            <div  className={`menu-item ${size}`}>
             <div className='background-image'
                 style={{
                backgroundImage:`url(${imageUrl})`,
    
             }} />  
              
             <div className='content'>
              <a href={linkUrl}>
               <h1 className='title'>{title}</h1>
              </a>
                <span className='subtitle'></span>
             </div>
            </div>
        )
}

export default MenuItem;
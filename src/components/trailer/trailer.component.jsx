import React from 'react';
import './trailer.styles.scss';


const Trailer = ({title,src})=>{
    return (
        <div className='book-trailer'>
            <h1 className='title'>{title}</h1>
            <div>
             <iframe width="560" height="315" src={src} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    )
}


export default Trailer;
import React from 'react';
import './gallery.styles.scss';


import Header from '../../components/header/header.component';
import Footer from '../footer/footer.component';
import GalleryShow from '../../components/gallery-showcase/gallery-showcase.component';

const Gallery = ()=>{
    return(
        <div className='gallery'>
            <div className='gallery-image'>
             <Header />
            </div>

             <GalleryShow title='theatere'/>
            <Footer />
        </div>
    )
}


export default Gallery;
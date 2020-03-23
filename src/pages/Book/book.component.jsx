import React from 'react';
import './book.styles.scss';

import Header from '../../components/header/header.component';
import Footer from '../footer/footer.component';
import Trailer from '../../components/trailer/trailer.component';
import BookShowcase from '../../components/book-showcase/book-showcase.component';


class Book extends React.Component{
    constructor(){
        super();

        this.state={
          bookUrl:'http://bluerosepublishers.com/product/cross-connection/'
        }
    }




    render() {
        return (
            <div>
              <div className='book--hero-image'>
                <Header />
                  <h1 className='title'>about the book</h1>
              </div>
               <Trailer title="trailer" src="https://www.youtube.com/embed/UjvOuarjaHY"/>
               <BookShowcase  />
               <div>
                <a href={this.state.bookUrl} className='find-more'>Want to know the whole story? Click here to grab your copy</a>
               </div>
               
              <Footer />  
            </div>
        )
    }
}
export default Book;
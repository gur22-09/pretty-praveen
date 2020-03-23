import React from 'react';
import './book-showcase.styles.scss';

const text = `To accomplish the dreams of her parents, Simar, a girl from Punjab, lands up in Tamilnadu to complete her degree in dentistry. But fate had written a different story for her. Struggling to survive in a new world, she meets the love of her life, Naveen, a boy from Kerala. Smiling in the world of their love, they weave a beautiful life around their dreams. But everything changes once Naveen leaves India, trying his luck to get a job abroad. After a year, he comes back to marry her…but…is she still there waiting for him…???`;

const BookShowcase = ()=>{
    return(
      <div className='container'>
         <div className='book-showcase'>
          <div className='book-display' />
           <div className='book-showcase--text'>
            {text}
           </div>
         </div>
        
      </div>
        
    )
}


export default BookShowcase;


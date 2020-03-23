import React from 'react';
import './menu-directory.styles.scss';


import MenuItem from '../menu-item/menu-item.component';

class Directory extends React.Component{
    constructor(){
        super();


        this.state={
            sections:[{
                title: 'About me',
                imageUrl: 'http://www.preetypraveen.com/wp-content/uploads/2020/01/author_image.jpg',
                id: 1,
                linkUrl: '/aboutme'

              },
              {
                title: 'Books',
                imageUrl: 'http://www.preetypraveen.com/wp-content/uploads/2020/01/mockup.jpg',
                id: 2,
                linkUrl: '/books'
              },
              {
                title: 'gallery',
                imageUrl: 'https://images.pexels.com/photos/2480854/pexels-photo-2480854.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                id: 3,
                linkUrl: '/gallery'
              },
              {
                title: 'blog',
                imageUrl: 'https://images.pexels.com/photos/265667/pexels-photo-265667.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                id: 4,
                size: 'large',
                linkUrl: '/blog'
              },
              {
                title: 'contact',
                imageUrl: 'http://www.preetypraveen.com/wp-content/uploads/2020/01/contactbg.jpg',
                id: 5,
                size: 'large',
                linkUrl: ' '
              }]
        }
    }






    render(){
        return(
            <div className='directory-menu'>
               {this.state.sections.map(({id,...otherProps})=>{
                   return <MenuItem key={id} {...otherProps} />
               })}
            </div>
        )
    }
}


export default Directory;
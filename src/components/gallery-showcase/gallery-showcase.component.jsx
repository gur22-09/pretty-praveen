import React from 'react';
import './gallery-showcase.styles.scss';




class GalleryShow extends React.Component{
    constructor(){
        super();

        this.state={
            theatere:[{
               
                imageUrl: 'http://www.preetypraveen.com/wp-content/uploads/2015/03/IMG_9076-min.jpg',
                id: 1,
                

              },
              {
                
                imageUrl: 'http://www.preetypraveen.com/wp-content/uploads/2015/03/IMG_3263-min.jpg',
                id: 2,
                
              },
              {
               
                imageUrl: 'http://www.preetypraveen.com/wp-content/uploads/2015/03/MG_5685-min.jpg',
                id: 3,
               
              },
              {
                
                imageUrl: 'http://www.preetypraveen.com/wp-content/uploads/2015/03/IMG_3003-1-min.jpg',
                id: 4,
               
              },
              {
               
                imageUrl: 'http://www.preetypraveen.com/wp-content/uploads/2015/03/IMG_2876-min.jpg',
                id: 5,
                
              },
              {
               
                imageUrl: 'http://www.preetypraveen.com/wp-content/uploads/2015/03/IMG_8944-min.jpg',
                id: 6,
                
              }
              ,
              {
               
                imageUrl: 'http://www.preetypraveen.com/wp-content/uploads/2015/03/MG_5651-min.jpg',
                id: 7,
                size:'large'
                
              }
              ,
              {
               
                imageUrl: 'http://www.preetypraveen.com/wp-content/uploads/2015/03/IMG_0558-min.jpg',
                id: 8,
                size:'large'
                
              }
            ],
            bookLaunch:[{
               
                imageUrl: 'http://www.preetypraveen.com/wp-content/uploads/2020/02/1I3A9437-min.jpg',
                id: 1,
                

              },
              {
                
                imageUrl: 'http://www.preetypraveen.com/wp-content/uploads/2020/02/1I3A9394-min.jpg',
                id: 2,
                
              },
              {
               
                imageUrl: 'http://www.preetypraveen.com/wp-content/uploads/2020/02/1I3A9175-min.jpg',
                id: 3,
               
              },
              {
                
                imageUrl: 'http://www.preetypraveen.com/wp-content/uploads/2020/02/1I3A9140-min.jpg',
                id: 4,
               
              },
              {
               
                imageUrl: 'http://www.preetypraveen.com/wp-content/uploads/2020/02/1I3A9103-min.jpg',
                id: 5,
                
              },
              {
               
                imageUrl: 'http://www.preetypraveen.com/wp-content/uploads/2020/02/1I3A9103-2-min.jpg',
                id: 6,
                
              }
              ,
              {
               
                imageUrl: 'http://www.preetypraveen.com/wp-content/uploads/2020/02/1I3A9147-min.jpg',
                id: 7,
                size:'large'
                
              }
              ,
              {
               
                imageUrl: 'http://www.preetypraveen.com/wp-content/uploads/2020/02/1I3A9306-min.jpg',
                id: 8,
                size:'large'
                
              }
            ]
        }
    }



    render(){
        const {theatere,bookLaunch} =this.state;
        return(
            <div class='container'>
                <h1 className='title'>theatere</h1>
    
                <div className='gallery-menu'>
                {theatere.map(el=>{
                    return(
                   <div  className={`menu-item ${el.size}`}>
                    <div className='background-image'
                    style={{backgroundImage:`url(${el.imageUrl})`,}} />  
                   </div> 
                    )
                })}
                </div>


                <h1 className='title'>book launch</h1>
    
                <div className='gallery-menu'>
                {bookLaunch.map(el=>{
                    return(
                   <div  className={`menu-item ${el.size}`}>
                    <div className='background-image'
                    style={{backgroundImage:`url(${el.imageUrl})`,}} />  
                   </div> 
                    )
                })}
                </div>

               
            </div>
        )
    }
}


export default GalleryShow;
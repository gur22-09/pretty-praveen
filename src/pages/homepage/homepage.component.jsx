import React from 'react';
import './homepage.styles.scss';



import Home from '../../components/Home/home.component';
import Directory from '../../components/directory/menu-directory.component';
import Footer from '../footer/footer.component';



const Homepage = ()=>{
    return (
        <div>
            <Home />
            <Directory />
            <Footer />
        </div>
    )
}


export default Homepage;
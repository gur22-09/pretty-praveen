import React from 'react';
import './App.css';

import Homepage from './pages/homepage/homepage.component';

import AboutMe from './pages/about me/about-me.component';
import Book from './pages/Book/book.component';
import Gallery from './pages/gallery/gallery.component';
import Blog from './pages/blog/blog.component';
import Contact from './pages/contact-us/contact-us.component';

import {Route,Switch} from 'react-router-dom';


class App extends React.Component{
  constructor(){
    super();
  }







  render(){
    return (
      <div>

        <Switch>
         <Route exact path='/' component={Homepage} />
         <Route  path='/aboutme' component={AboutMe} />
         <Route  path='/books' component={Book} />
         <Route  path='/gallery' component={Gallery} />
         <Route path='/blog' component={Blog} />
         <Route path='/contact' component={Contact} />
        </Switch>

          
      </div>
    );
  }
}

export default App;

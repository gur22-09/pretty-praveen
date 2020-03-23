import React from 'react';
import './contact-us.styles.scss';


import Header from '../../components/header/header.component';
import Footer from '../footer/footer.component';
import FormInput from '../../components/form-input/form-input.component';

import Button from '@material-ui/core/Button';

const Contact = ()=>{
    return (
       <div>
        <div className='contact'>
         <Header />
            
        </div>
        <div className='contact-form'>
         <h1 className='title'>Have Any Queries, Please Don't Hesitate To Fill The Form.<span className='line-header' /></h1>
         
         <form className='form-submit'>
          <FormInput name='name' type='text' label='your name' required />
          <FormInput name='email' type='email' label='your email' required />
          <FormInput name='message' type='textarea' label='your meassage' required />
          <Button onClick={(e)=>{
              e.preventDefault(); 
          }} className='btn' variant="outlined">Submit</Button>
         </form>
        </div>
        <Footer />
       </div> 
        
    )
}



export default Contact;
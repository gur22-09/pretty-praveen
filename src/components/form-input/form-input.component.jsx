import  React from 'react';
import './form-input.styles.scss';


const FormInput =({label,...otherProps})=>(
    <div className='group'>
      <input className='form-input' {...otherProps}  spellCheck='false'/>
      {
          label?(<label className={`${label.length ?'shrink' :' ' } form-input-label`}
          >{label}
          </label>)
          :null
      }
    </div>
)

export default FormInput;
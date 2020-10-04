import React from 'react';
import './deleted.css'

const Deleted = ({ props }) => {
    
     {props.deleted.map((deleted,i) => 
          
          <ul className='list'>
               <li Key={i}>
                    {deleted}
               </li>
          </ul>

     )}
     
} 

export default Deleted;
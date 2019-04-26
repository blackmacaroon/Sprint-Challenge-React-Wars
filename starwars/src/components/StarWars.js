import React from 'react';


function Chars (props) {
      console.log('starwarsprops', props)
     return (
           <div className='card'>
                  <h2>{props.thing.name}</h2>
                <ul>
                      <li>{props.thing.birth_year}</li>
                      <li>{props.thing.height}</li>
                      <li>{props.thing.weight}</li>
                      <li>{props.thing.mass}</li>
                </ul>
           </div>
     );
}

export default Chars;
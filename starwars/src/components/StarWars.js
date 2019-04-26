import React from 'react';


function Chars (props) {
      console.log('starwarsprops', props)
     return (
           <div className='card'>
                  <h2>{props.thing.name}</h2>
                  <ul className='deets'>
                        <li>Birth Year: {props.thing.birth_year}</li>
                        <li>Height: {props.thing.height}</li>
                        <li>Mass: {props.thing.mass}</li>
                        <li>Eye Color: {props.thing.eye_color}</li>
                        <li>Hair Color: {props.thing.hair_color}</li>
                        <li>Skin Color: {props.thing.skin_color}</li>
                  </ul>
           </div>
     );
}

export default Chars;
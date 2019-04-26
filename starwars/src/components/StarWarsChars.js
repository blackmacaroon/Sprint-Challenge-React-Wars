import React from 'react';
import Chars from './StarWars'


function CharsList (props) {
      console.log('props', props)
     return (
          <div className='character'>
                        {props.starwarsChars.map(thing => (
                              <Chars
                              key={thing.id}
                              thing={thing} />
                        ))}
                 
      
           </div>
     )
}

export default CharsList;
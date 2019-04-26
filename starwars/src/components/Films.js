import React from 'react';
import Films from './FilmWars'


function FilmsList (props) {
      // console.log('props', props)
     return (
          <div className='films'>
                        {props.filmList.map(thing => (
                              <Films
                              key={thing.id}
                              thing={thing} />
                        ))}
                 
      
           </div>
     )
}

export default FilmsList;
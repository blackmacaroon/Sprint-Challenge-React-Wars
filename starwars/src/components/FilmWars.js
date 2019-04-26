import React from 'react';


function Films (props) {
      // console.log('filmprops', props)
     return (
           <div className='filmcard'>
                  <h2>{props.thing.films}</h2>
           </div>
     );
}

export default Films;
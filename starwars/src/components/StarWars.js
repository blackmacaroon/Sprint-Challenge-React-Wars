import React from 'react';


function Chars (props) {
      console.log('starwarsprops', props)
     return (
           <div>
                <p>{props.thing.name}</p>
           </div>
     );
}

export default Chars;
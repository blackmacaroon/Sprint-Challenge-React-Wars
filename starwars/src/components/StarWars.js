import React from 'react';


function Chars (props) {
      console.log(props)
     return (
           <div>
                 <p>
                        {props.starwarsChars.name}
                 </p>  
           </div>
     );
}

export default Chars;
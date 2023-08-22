import React, { useState, useEffect } from 'react';

const ShowForm = ({clickHandler}) => {
    return ( 
        <button onClick={clickHandler}>+</button>
     );
}
 
export default ShowForm;
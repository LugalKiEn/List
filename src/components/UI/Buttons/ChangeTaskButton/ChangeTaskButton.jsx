import React, { useState, useEffect } from 'react';

const ChangeTaskButton = ({changeHandler}) => {
    return ( 
        <button onClick={changeHandler}>Change</button>
     );
}
 
export default ChangeTaskButton;
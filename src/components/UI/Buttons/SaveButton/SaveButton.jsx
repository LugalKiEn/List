import React, { useState, useEffect } from 'react';

const SaveButton = ({saveHandler}) => {
    return ( 
        <button onClick={saveHandler}>Save</button>
     );
}
 
export default SaveButton;
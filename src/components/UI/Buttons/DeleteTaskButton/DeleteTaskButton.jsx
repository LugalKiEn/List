import React, { useState, useEffect } from 'react';


const DeleteTaskButton = ({deleteHandler}) => {
    return ( 
        <button onClick={deleteHandler}>Delete</button>
     );
}
 
export default DeleteTaskButton;
import React, { useState, useEffect } from 'react';

const CheckBox = ({checked, checkHandler}) => {
    return ( 
        <div className='checkbox-container'>
            <input name="checkbox" checked={checked} type="checkbox" onChange={checkHandler}></input>
            <label htmlFor="checkbox">{checked ? "Completed" : 'Not completed'}</label>
        </div>
     );
}
 
export default CheckBox;
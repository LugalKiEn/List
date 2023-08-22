import React, { useState, useEffect } from 'react';
import AddTaskButton from '../../UI/Buttons/AddTaskButton/AddTaskButton';
import Input from '../../UI/Input/Input';
import './Form.css';

const Form = ({isVisible, clickHandler}) => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const transferData = (e) => {
        e.preventDefault();
        clickHandler(title, description);
        setTitle("");
        setDescription("");
    }
    return ( 
        <div style={{display: `${isVisible ? "flex" : "none"}`}} className='form-container'>
            <form method="POST" className='form'>
                <Input name={"title"} placeholder={"Set title"} value={title} onChange={(e) => setTitle(e.target.value)}/>
                <Input name={"description"} placeholder={"Set description"} value={description} onChange={(e) => setDescription(e.target.value)}/>
                <AddTaskButton clickHandler={transferData}/>
            </form>
        </div>
     );
}
 
export default Form;
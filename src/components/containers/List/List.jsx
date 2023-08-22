import React, { useState, useEffect } from 'react';
import ListElement from '../ListElement/ListElement';
import Form from '../Form/Form';
import ShowForm from '../../UI/Buttons/ShowForm/ShowForm';
import "./List.css";


const List = () => {
    const [tasks, setTasks] = useState([]);
    const [isFormVisible, setIsFormVisible] = useState(false);
  
    const addTask = (title, description) => {   
        if (title) {     
            setTasks(
            [...tasks,
                {
                    id: Date.now(),
                    title: title,
                    description: description ? description : "",
                    completion: false,
                }]
            );
            showForm();
        } else {
            alert("title field is empty");
        }
    }

    const showForm = () => {
        setIsFormVisible(previousState => !previousState);
    }

    return (
        <div className={"container"}>
            <Form isVisible={isFormVisible} clickHandler={addTask}/>
            {tasks && tasks.map((elem) => {
               return <ListElement key={elem.id} title={elem.title} description={elem.description} completion={elem.completion}/>
            })}
            <ShowForm clickHandler={showForm}/>
        </div>
    );
}

export default List;
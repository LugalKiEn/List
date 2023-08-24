import React, { useState, useEffect } from 'react';
import AddTaskButton from '../../UI/Buttons/AddTaskButton/AddTaskButton';
import Input from '../../UI/Input/Input';
import './Form.css';
import { useDispatch, useSelector } from 'react-redux';
import { editTask, addTask, setIsFormVisible, setCurrentFormData } from '../../../redux/actions';

const Form = ({isVisible}) => {
    const dispatch = useDispatch();
    const {id, parentId, completion, subtasks, level} = useSelector(state=>state.currentFormData);
    const title = useSelector(state=>state.currentFormData.title ? state.currentFormData.title : "");
    const description = useSelector(state=>state.currentFormData.description ? state.currentFormData.description : "");
    const {isFormVisible} = useSelector(state => state);
    const [initTitle, setInitTitle] = useState(title ? title : "");
    const [initDescription, setInitDescription] = useState(description ? description : "");

    useEffect(() => {
        setInitTitle(title);
        setInitDescription(description);
    }, [title, description]);
    
    const transferData = (e) => {
        e.preventDefault();
        if(id) {
            if (initTitle) {     
                dispatch(editTask(
                    {
                        id: id,
                        parentId: parentId,
                        title: initTitle,
                        description: initDescription ? initDescription : "",
                        completion: completion,
                        subtasks: subtasks ? subtasks : [],
                        level: level,
                    }
                ));
                dispatch(setCurrentFormData({}));
                setInitTitle("");
                setInitDescription("");
                dispatch(setIsFormVisible(!isFormVisible));
            } else {
                alert("title field is empty");
            }
        } else {
            if (initTitle) {     
                dispatch(addTask(
                    {
                        id: Date.now(),
                        parentId: parentId,
                        title: initTitle,
                        description: initDescription ? initDescription : "",
                        completion: false,
                        subtasks: [],
                        level: level,
                    }
                ));
                dispatch(setCurrentFormData({}));
                setInitTitle("");
                setInitDescription("");
                dispatch(setIsFormVisible(!isFormVisible));
            } else {
                alert("title field is empty");
            }
        }
    }
    return ( 
        <div style={{display: `${isVisible ? "flex" : "none"}`}} className='form-container'>
            <form method="POST" className='form'>
                <Input name={"title"} placeholder={"Set title"} value={initTitle} onChange={(e) => setInitTitle(e.target.value)}/>
                <Input name={"description"} placeholder={"Set description"} value={initDescription} onChange={(e) => setInitDescription(e.target.value)}/>
                <AddTaskButton clickHandler={transferData}/>
            </form>
        </div>
     );
}
 
export default Form;
import React, { useState, useEffect } from 'react';
import ListElement from '../ListElement/ListElement';
import Form from '../Form/Form';
import ShowForm from '../../UI/Buttons/ShowForm/ShowForm';
import "./List.css";
import { useDispatch, useSelector } from 'react-redux';
import { loadTasks, setIsFormVisible } from '../../../redux/actions';
import getList from '../../../requests/getList';
import SaveButton from '../../UI/Buttons/SaveButton/SaveButton';
import saveList from '../../../requests/saveList';


const List = () => {
    const dispatch = useDispatch();
    const {tasks, isFormVisible} = useSelector(state => state);

    const processingRequest = async () => {
        await getList().then(result => {
            if (result.length) {
                dispatch(loadTasks(JSON.parse(result)))
                console.log(JSON.parse(result));
            }
        })
        
    }

    useEffect(() => {
        processingRequest();
    }, []);


    const showForm = () => {
        dispatch(setIsFormVisible(!isFormVisible));
    }

    const savetoDB = async () => {
        await saveList(tasks).then(result => {
            console.log(result);
        })
    }

    return (
        <div className={"container"}>
            <Form 
                isVisible={isFormVisible} 
            />
            {tasks && tasks.map((elem) => {
               return <ListElement 
                id={elem.id} 
                key={elem.id} 
                title={elem.title} 
                description={elem.description} 
                completion={elem.completion}
                subtasks={elem.subtasks}
                level={1}
                >
                    {elem.subtasks && elem.subtasks.map((subelem) => {
                        return <ListElement 
                        id={subelem.id} 
                        parentId={elem.id}
                        key={subelem.id} 
                        title={subelem.title} 
                        description={subelem.description} 
                        completion={subelem.completion}
                        level={2}
                        />
                    })}
                </ListElement>
            })}
            <ShowForm clickHandler={showForm}/>
            <SaveButton saveHandler={savetoDB}/>
        </div>
    );
}

export default List;
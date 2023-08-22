import React, { useState, useEffect } from 'react';
import ChangeTaskButton from '../../UI/Buttons/ChangeTaskButton/ChangeTaskButton';
import DeleteTaskButton from '../../UI/Buttons/DeleteTaskButton/DeleteTaskButton';
import "./ListElement.css";


const ListElement = ({title, description}) => {
    return (
        <div className={"list-element-container"}>
            <div className={"list-element-header"}>
                <h2 className={'list-element-title'}>{title}</h2>
                <div className={'list-element-navigation'}>
                    
                    <ChangeTaskButton/>
                    <DeleteTaskButton/>
                </div>
            </div>
            <p className={"list-element-description"}>{description}</p>
        </div>
    )
}

export default ListElement;
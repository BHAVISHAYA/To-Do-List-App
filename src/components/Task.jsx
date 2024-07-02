import React from 'react'
import { DeleteTask } from './DeleteTask';
import { EditTask } from './EditTask';

export const Task = (props) => {
    
    const { key, onSelect, onEdit,  currTaskName, currTaskId, id } = props;

    return (
        <>
            <div className="col-md-7 col-12 showItem">
                <div className="item">
                    <h1> {currTaskName} </h1>
                </div>
                {/* <i className="fa-solid fa-trash-alt deleteBtn" onClick={() => {onSelect(id)}}></i> */}
                <div className='buttons'>
                    <EditTask onClear={onEdit} id={currTaskId} />
                    <DeleteTask onClear={onSelect} id={currTaskId} />
                </div>
            </div>
        </>
    )
}

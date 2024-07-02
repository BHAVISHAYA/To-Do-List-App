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
                <div className='buttons text-center'>
                    <EditTask onClear={onEdit} id={currTaskId} />
                    <DeleteTask onClear={onSelect} id={currTaskId} />
                </div>
            </div>
        </>
    )
}

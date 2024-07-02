import React from 'react'

export const DeleteTask = (props) => {

    const { onClear, id } = props;
     
    return (
        <>
            <i className="fa-solid fa-trash-alt deleteBtn px-3" onClick={() => {onClear(id)}}></i>
        </>
    )
}

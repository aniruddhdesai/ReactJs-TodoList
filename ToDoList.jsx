import React from 'react';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

const ToDoList = (prop) => {
    return (
        <>
            <div className="todo">
            <Tooltip title="Remove-Item">
                <Button
                    type="button"
                    className="btn btn-circle btn-sm btn-outline-danger mr-4" onClick={() => {
                        prop.onSelect(prop.id)
                    }}><DeleteForeverIcon /></Button></Tooltip>
                <h2 className="fs-5 fw-bold ml-4 text-secondary">{prop.item}</h2>
            </div>
        </>
    )

}
export default ToDoList;
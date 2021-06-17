import React, { useState } from 'react';
import ToDoList from './ToDoList'
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';



const Maincon = () => {
    const [item, setitem] = useState("");
    const [fitem, setfitem] = useState([]);

    const AddItm = (a) => {
        a.preventDefault();
        setfitem((ii) => {
            return [...ii, item]
        })
        setitem("");
        if (item === "") {
            alert("You Not Entered Item")
            setfitem((a) => {
                return a.filter((arr, index) => {
                    return arr !== ""
                })
            })
        }
    }
    const handleKeyPress = (t) => {

        if (t.charCode === 13) {
            setfitem((ii) => {
                return [...ii, item]
            })
            setitem("");
            if (item === "") {
                alert("You Not Entered Item")
                setfitem((a) => {
                    return a.filter((arr, index) => {
                        return arr !== ""
                    })
                })
            }
        }
    }

    const Item = (d) => {
        setitem(d.target.value)
    }
    const deleteItem = (id) => {
        setfitem((a) => {
            return a.filter((arr, index) => {
                return index !== id
            })
        })
    }
    return (
        <>
            <br />
            <div className="box">
                <br /> <center>
                    <div className="box_header bg-secondary wrapper ">Your ToDo List</div>
                </center><br />
                <center>
                    <Input
                        type="text"
                        name="item"
                        placeholder="Add Item"
                        value={item}
                        onChange={Item}
                        autoComplete='off'
                        onKeyPress={handleKeyPress}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">

                                </InputAdornment>
                            ),
                        }}
                    />
                    <Tooltip title="Add-item" placement="right">
                        <Button
                            type="button"
                            class="btn btn-outline-secondary mx-5"
                            onClick={AddItm}
                        ><AddIcon /></Button></Tooltip>

                </center>
                <br />
                {
                    fitem.map((itemn, index) => {
                        return (
                            <ToDoList
                                key={index}
                                id={index}
                                item={itemn}
                                onSelect={deleteItem}
                            />
                        )
                    })
                }

            </div>
            <br />
        </>
    )
}
export default Maincon;
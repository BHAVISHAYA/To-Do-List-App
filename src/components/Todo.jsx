import React, { useState } from 'react'
import "../App.css"
import AddIcon from '@mui/icons-material/Add';
import { Task } from './Task';
import { CurrencyLira, CurrencyRuble, Newspaper, SettingsInputAntenna } from '@mui/icons-material';

export const Todo = () => {

    const [inputData, setInputData] = useState();
    const [items, setItems] = useState([]);
    const [toggleBtn, setToggleBtn] = useState(true);
    const [isEditItem, setIsEditItem] = useState();

    const inputEvent = (event) => {
        setInputData(event.target.value);
    }

    const addItems = () => {
        if(!inputData) {
            alert("Please enter the task....");
        }
        else if(inputData && !toggleBtn) {
            setItems(
                items.map((currElem) => {
                    if(currElem.id === isEditItem) {
                        return {...currElem, name:inputData};
                    }
                    return currElem;
                })
            )
            setToggleBtn(true);
            setInputData("");
            setIsEditItem(null);
        }
        else {
            const allInputData = {
                id : new Date().getTime().toString(),
                name : inputData,
            }
            setItems([...items, allInputData]);
            setInputData("");
        }
    }

    const deleteCurrItem = (currTaskId) => {
        console.log(currTaskId);
        setItems(items.filter((currItem) => {
            return (currItem.id !== currTaskId);
        }))
    }

    const editItem = (currTaskId) => {
        console.log(currTaskId);
        let newEditItem = items.find((currElem) => {
            return (currElem.id === currTaskId);
        })
        console.log(newEditItem);
        setToggleBtn(false);
        setInputData(newEditItem.name);
        setIsEditItem(currTaskId);
    }

    const allClear = () => {
        setItems([]);
    }

    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 text-center mt-4 mb-5">
                        <img className='img-fluid' src="https://cdn-icons-png.flaticon.com/128/15198/15198197.png" alt="To DO List" />
                    </div>

                    <div className="col-md-7 col-12 mb-5 wrapper justify-content-center align-items-center">
                        <input 
                            className='inputField' 
                            type="text" 
                            placeholder=' 📝 Add Items... ' 
                            value={inputData}
                            onChange={inputEvent}
                        />
                        {
                            toggleBtn === true ? 
                            <i className="fa-solid fa-plus plusBtn" onClick={addItems}></i> : 
                            <i className="fa-solid fa-pen-to-square plusBtn" onClick={addItems}></i> 
                        }

                        
                    </div>

                    {
                        items.map((currItem, index) => {
                            return (
                                <>
                                    <Task key={currItem.id} onSelect={deleteCurrItem} onEdit={editItem} currTaskName={currItem.name} currTaskId={currItem.id}  id={index} />
                                </>
                            )
                        })
                    }

                    <div className='col-7 text-center my-3'>
                        <button onClick={allClear}>Remove All</button>
                    </div>
                </div>
            </div>
        </>
    )
}

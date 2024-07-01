import React, { useState } from 'react'
import "../App.css"
import AddIcon from '@mui/icons-material/Add';
import { SettingsInputAntenna, SettingsOutlined } from '@mui/icons-material';

export const Todo = () => {

    const [inputData, setInputData] = useState();
    const [items, setItems] = useState([]);

    const inputEvent = (event) => {
        setInputData(event.target.value);
    }

    const addItems = () => {
        if(inputData !== "") {
            setItems([...items ,inputData]);
            setInputData("");
        }
    }

    const deleteCurrItem = (id) => {
        console.log(id);
        setItems(items.filter((currItem, index) => {
            return (index !== id);
        }))
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
                        <i className="fa-solid fa-plus plusBtn" onClick={addItems}></i>
                    </div>

                    {/* <div className="col-7 showItem">
                        <div className="item">
                            <h1>  </h1>
                        </div>
                        <i className="fa-solid fa-trash-alt~ deleteBtn"></i>
                    </div> */}

                    {
                        items.map((currItem, index) => {
                            return (
                                <>
                                    <div className="col-md-7 col-12 showItem" key={index}>
                                        <div className="item">
                                            <h1> {currItem} </h1>
                                        </div>
                                        <i className="fa-solid fa-trash-alt deleteBtn" onClick={() => {deleteCurrItem(index)}}></i>
                                    </div>
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

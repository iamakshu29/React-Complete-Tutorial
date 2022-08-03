import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import List from './List';



const ToDoList = ()=>{
    const [item,setItem] = useState("");
    const [newItem,setNewItem] = useState([]);
    const inputValue = (event)=>{
        setItem(event.target.value);
    }
    const addItem = ()=>{
        setNewItem((prevValue)=>{
           return ([...prevValue,item]);
        });
        setItem('');
    }

    return (
       
        <>
        <div className='main_div'>
            <div className='center_div'>
                <hr />
                <h1>TO DO List with Material UI</h1>
                <hr />
                <input type='text' placeholder='Add an Item' value={item} onChange={inputValue}></input>
                <Button onClick={addItem} ><AddIcon /></Button>
                <ul>
                    
                    {newItem.map((value,index)=>{
                        return (
                            <List key={index} notes={value} />
                        )
                    })}
                </ul>
            </div>
        </div>
        </>
    )
};


export default ToDoList;
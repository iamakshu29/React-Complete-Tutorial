import React, { useState } from 'react';
import List from './ToDoList';

const App = () => {
    const [currNote, setNote] = useState('');
    const [items, setItems] = useState([]);

    const notesValue = (event) => {
        var notes = event.target.value;
        setNote(notes);
    };

    const addNotes = (events) => {
        events.preventDefault(); // no need for these can remove it too
        setItems((prevValue) => {
            return [...prevValue, currNote];
        });

            //OR

//* setItems([...items,currNote]);
//Both code are same (see in folder 17 todoList with advance feature for thapa explaination)
// else for see in (folder 8 -> 3.1 -> from line 34) for my explaination  


//* If we add only the new value in array like setItems([currNote]);
// then the new value replace old value as it gives itemas new array every item 
//* so to get oldervalue too we use the prevVlaue args which act as an object in updateState in useState()

        setNote('');
        // to make the input area empty after we click the add button we update the currNote to ""
        // and we also need to add value section in input value = {currNote} so that it displays too
    };

    const delNotes = (id) => {
        setItems((prevValue) => {
            return prevValue.filter((currdata,index)=>{
                return index !== id;
            })
        })
    };
                // OR

    // const delNotes = (id) => {
       //     setItems(()=>{
       //         return items.filter((ele,index)=>{
       //             return index!==id;
       //         })
       //     })
    // }

//* both functions of delNotes are correct
//* similarly as in addNotes function since the values are updated in items array
//* so instead of using the prevValue for filtering the value we can filter out the values from items Array too



    return (
        <>
            <div className='main_div'>
                <div className='center-div'>
                    <h1>TO do List</h1>
                    <input type='text' name='notes' placeholder='Add a note' value={currNote} onChange={notesValue} />
                    <button onClick={addNotes}>Add Notes</button>
                    <ol>
                        {/* <li>{currNote}</li> */}

                        {
                            items.map((value, index) => {
                                return <List key={index} id={index} notes={value} delFunc={delNotes} />
                            })
                        }
                    </ol>
                </div>
            </div>
        </>
    )
};

export default App;
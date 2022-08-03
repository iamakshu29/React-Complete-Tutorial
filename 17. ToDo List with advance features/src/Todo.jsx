import React, { useState, useEffect } from 'react'
import List from './List';

//TODO to get the items from localStorage
const getLocalItems = () => {
    let list = localStorage.getItem("toDoList");
    if (list) {
        return JSON.parse(localStorage.getItem("toDoList")); //* parse return an object but it works fine as an array too when send to use State instead of array in line 18
    }
    else {
        return [];
    }

}

const Todo = () => {
    const [item, setitem] = useState('');
    const [storeItem, setStoreItem] = useState(getLocalItems());
    const [toggleSubmit, setToggleSubmit] = useState(true);
    const [edittedItem, setEdittedItem] = useState(null);

    const input = (e) => {
        const value = e.target.value;
        setitem(value);
    }

    const add = () => {
        // this if-else statement helps use to add the empty values
        if (!item) {
            alert('please enter some data');
        }
        else if (item && !toggleSubmit) {
            setStoreItem(
                storeItem.map((value) => {
                    if (value.id === edittedItem) {
                        return { ...value, name: item };
                    }
                    return value;
                })
            )
            setitem('');
            setToggleSubmit(true);
            setEdittedItem(null);
        }
        else {

            // setStoreItem((prevValue) => {
            //     return [...prevValue, item];
            // })


            // we did not need to use the call back func having an arguement as prevValue we directly use the initialState with spread operator(...) instead of as we done above


            const allInputData = { id: new Date().getTime().toString(), name: item }
            setStoreItem([...storeItem, allInputData]);
            setitem('');
        }
    }

    const delet = (index) => {
        // setStoreItem((prevValue) => {
        //     return prevValue.filter((data, index) => {
        //         return id !== index;
        //     });
        // });

        // same here as comments at line 40

        setStoreItem(storeItem.filter((data) => {
            return index !== data.id;
        }));
    }

    const editList = (id) => {
        let newEditItem = storeItem.find((elem) => {
            return elem.id === id;
        });
        setitem(newEditItem.name);
        setToggleSubmit(false);
        setEdittedItem(id);
    }

    const removeAll = () => {
        setStoreItem([]);
    }

    //TODO to set the items in local storage we use useEffect() hook and it stores when "item" is added in "storeitem" array  

    useEffect(() => {
        localStorage.setItem("toDoList", JSON.stringify(storeItem));
    }, [storeItem]);

    return (
        <React.Fragment>
            <input type="text" value={item} placeholder="Add The Item" onChange={input} />
            {
                toggleSubmit ? <button onClick={add}>Add Item</button> :
                    <button onClick={add}>Update Editted Item</button>
            }

            {
                storeItem.map((value) => {
                    return <List items={value.name} key={value.id} id={value.id} fun={delet} funTwo={editList} />
                })
            }
            <br></br><br></br>
            <button onClick={removeAll}>Remove All</button>
        </React.Fragment>
    )
}

export default Todo;


// we made a to do list app before in which we simply add or delete the items

// but in this to do list we add three more more functionality
//* 1. delete all
// in this we only pass the empty array its is simple

//* 2. click on the edit button in list to get the item in input field
// to do this we need an id so that when we click the edit button on particular list that id is get so that we update the item later on
// so we pass object in array containing id and the item as name
// to always get the unique id we use the date function and pass the getTime() as a id

//* Now when we click the edit button in list it matches the lists id with the id present in array of object using .find() function
//* to get the editted list item in input field to get updated we pass the object.name to setItem() where it gets the event.target.value and the value attr. in input field gets updated..


//* 3. To update the value by clicking on update button and toggle the buttons from add to update when edit is clicked
// to toggle the button we make a new useState() and set it to true and using the ternary operator we show the buttons
// and when the edit button is clicked to toggle gets false and the updated button is shown instead of add btn

//! all the statement below is for the code written in else if() statement
//* to update the value and add it to same place where it was located first we check there is some input and we toggle the button false to get the updated button instead of add btn
//* then we use map function in the state where all value are stored ie setStoreItem and return the updated value if the id present in the stored array and the id of that list content matches





